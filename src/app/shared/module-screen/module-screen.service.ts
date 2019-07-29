import { Injectable } from '@angular/core';
import { ModuleMaster } from 'src/app/model/module-master';
import { HttpClient } from '@angular/common/http';
import { ScreenMaster } from 'src/app/model/screen-master';

@Injectable({
  providedIn: 'root'
})
export class ModuleScreenService {
  private baseUrl = 'http://localhost:9992';

  constructor(private _http:  HttpClient) { }

  public saveModuleMster(moduleMaster:ModuleMaster){
    return this._http.post(this.baseUrl + '/moduleMaster/saveModuleMaster', moduleMaster);

  }

  public updateModuleMster(moduleMaster:ModuleMaster){

  }

  public deleteModuleMster(moduleUid:number){

  }

  public getModuleMasterList(){

    return this._http.get<ModuleMaster[]>(this.baseUrl + '/moduleMaster/moduleMasterList');

  }


// ScreenMaster SERVICE CODE 
  public saveScreenMaster(screenMaster:ScreenMaster){
    return this._http.post(this.baseUrl + '/screenMaster/saveScreenMaster', screenMaster);

  }

  public updateScreenMaster(screenMaster:ScreenMaster){

  }

  public deleteScreenMaster(screenUid:number){

  }

  public getScreenMasterList(){

    return this._http.get<ScreenMaster[]>(this.baseUrl + '/moduleMaster/screenMasterList');

  }
}
