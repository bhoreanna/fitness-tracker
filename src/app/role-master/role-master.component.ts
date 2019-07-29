import { Component, OnInit, ViewChild } from '@angular/core';
import { ModuleScreenService } from '../shared/module-screen/module-screen.service';
import { UserRoleService } from '../shared/user-role/user-role.service';
import { ModuleMaster } from '../model/module-master';
import { RoleMaster } from '../model/role-master';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-role-master',
  templateUrl: './role-master.component.html',
  styleUrls: ['./role-master.component.css']
})
export class RoleMasterComponent implements OnInit {
  moduleMasterList: ModuleMaster[] = [];
  roleMaster = new RoleMaster();
flag=false;
  dataSource: MatTableDataSource<ModuleMaster>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[] = ['moduleUid', 'select', 'moduleId',
    'moduleName', 'createdBy', 'moduleStatus', 'action'];

  selection = new SelectionModel<ModuleMaster>(true, []);

  constructor(private moduleScreenService: ModuleScreenService,
    private userRoleService: UserRoleService
  ) { }

  ngOnInit() {

    console.log('in NG ONINIT');
    this.moduleScreenService.getModuleMasterList().subscribe(res => {
      this.moduleMasterList = res;
      this.moduleMasterList.forEach(element => {
        element.select= false;
      });
      this.dataSource = new MatTableDataSource(this.moduleMasterList);

      console.log("this.moduleMasterList: ", this.moduleMasterList);
    });
  }

  onSubmit(f){
    console.log('roleMaster: ' , this.roleMaster);

    console.log("moduleMasterList: " , this.moduleMasterList);

    this.moduleMasterList.forEach(element => {
      if(element.select === true){
        this.roleMaster.moduleMasterList.push(element);
      }
    });

    console.log('Before Submiting: RoleMaster: ',  this.roleMaster );
    this.flag=true;
    this.userRoleService.saveRoleMster(this.roleMaster).subscribe(res=>{
console.log("Return Data: " , res);
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }


  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ModuleMaster): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.moduleUid + 1}`;
  }

  viewModuleMasterList(moduleMaster: ModuleMaster) {
    console.log('moduleMaster in Edit: ', moduleMaster);
  }

  onDelete(moduleUid: number) {
    console.log('ON DELETE: ', moduleUid);
  }


  onAdd(moduleMaster: ModuleMaster) {
    console.log(" Before moduleMaster: " + moduleMaster.moduleId + 'Select value :' + moduleMaster.select)

 
    moduleMaster.select = !moduleMaster.select;
    console.log("after moduleMaster: " + moduleMaster.moduleId + 'Select value :' + moduleMaster.select)

    
  }

  refresh(){
    // this.moduleScreenService.getModuleMasterList().subscribe(res => {
    //   this.moduleMasterList = res;
    //   this.moduleMasterList.forEach(element => {
    //     element.select= false;
    //   });
    //   this.dataSource = new MatTableDataSource(this.moduleMasterList);

    //   console.log("this.moduleMasterList: ", this.moduleMasterList);
    // });

    this.flag=false;
    this.roleMaster = new RoleMaster();

  }
}
