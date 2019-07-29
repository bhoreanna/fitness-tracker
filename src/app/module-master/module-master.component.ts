import { Component, OnInit } from '@angular/core';
import { ModuleScreenService } from '../shared/module-screen/module-screen.service';
import { Form } from '@angular/forms';
import { ModuleMaster } from '../model/module-master';

@Component({
  selector: 'app-module-master',
  templateUrl: './module-master.component.html',
  styleUrls: ['./module-master.component.css']
})
export class ModuleMasterComponent implements OnInit {
  moduleMaster = new ModuleMaster() ;
  maxDate ;

  constructor(private moduleScreenService:ModuleScreenService) { }

  ngOnInit() {
    this.maxDate = new Date();

  }

  public onSubmit(moduleForm: Form){
    console.log("moduleMaster: " , this.moduleMaster.moduleStatus);
    this.moduleScreenService.saveModuleMster(this.moduleMaster).subscribe(data=>{
      console.log('data: ', data);
      this.moduleMaster = new ModuleMaster() ;
    });
  }

}
