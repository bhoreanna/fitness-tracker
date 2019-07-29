import { Component, OnInit } from '@angular/core';
import { ModuleScreenService } from '../shared/module-screen/module-screen.service';
import { ModuleMaster } from '../model/module-master';
import { ScreenMaster } from '../model/screen-master';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-screen-master',
  templateUrl: './screen-master.component.html',
  styleUrls: ['./screen-master.component.css']
})
export class ScreenMasterComponent implements OnInit {
  moduleMasterList: ModuleMaster [] = [];
  screenMaster = new ScreenMaster();
  constructor(private moduleScreenService:ModuleScreenService) { }

  ngOnInit() {
    console.log('in NG ONINIT');
    this.moduleScreenService.getModuleMasterList().subscribe(res=>{
      this.moduleMasterList=res;
      console.log("this.moduleMasterList: " , this.moduleMasterList);
    });
  }

  ngOnDoCheck(){
    console.log("Select Module id for screenMaster: " ,this.screenMaster.moduleMaster.moduleId);
  }


  onSubmit(f:Form){
    console.log("Select  screenMaster DATA: " ,this.screenMaster);

    this.moduleScreenService.saveScreenMaster(this.screenMaster).subscribe(res=>{
      console.log('DATA RETURN : ' , res);

      this.screenMaster= new ScreenMaster();
    });
  }

}
