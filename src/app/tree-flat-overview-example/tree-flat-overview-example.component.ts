import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { UserRoleService } from '../shared/user-role/user-role.service';
import { ModuleMaster } from '../model/module-master';
import { RoleMaster } from '../model/role-master';


class FoodNode {
  name: string;
  children?: FoodNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-tree-flat-overview-example',
  templateUrl: './tree-flat-overview-example.component.html',
  styleUrls: ['./tree-flat-overview-example.component.css']
})
export class TreeFlatOverviewExampleComponent implements OnInit, OnDestroy {

  moduleMasterList: ModuleMaster[] = [];

  filterModuleMasterList: ModuleMaster[];
  TREE_DATA: FoodNode[] = [];
  roleMster = new RoleMaster();
  fagStatus = false;

  constructor(private userRoleService: UserRoleService, ) {
    //this.dataSource.data = TREE_DATA;
    let roleId = sessionStorage.getItem("ROLE_ID");
    console.log('Role Id in Auth Gurd Service: ', roleId);
    if (roleId) {
      this.userRoleService.getModuleListByRoleId(roleId).subscribe(res => {
        console.log('Return role list Object: ', res);
        this.moduleMasterList.push(...res.moduleMasterList);

        this.moduleMasterList.forEach(e => {
          let foodNode = new FoodNode();
          foodNode.children = [];
          foodNode.name = e.moduleId;

          e.screenMasterList.forEach(child => {

            let foodNodechild = new FoodNode();
            foodNodechild.name = child.screenId;
            foodNode.children.push(foodNodechild);

          });
          this.TREE_DATA.push(foodNode);

        });
        console.log('this.TREE_DATA: ', this.TREE_DATA);
        this.dataSource.data = this.TREE_DATA;
        this.fagStatus = true;
      });
    }
  }

  ngOnInit() {



  }

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;




  ngOnDestroy() {
    this.TREE_DATA = [];
  }
}
