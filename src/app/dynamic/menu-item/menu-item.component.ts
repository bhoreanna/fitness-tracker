import { Component, OnInit,Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenMaster } from 'src/app/model/screen-master';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
 
  @Input() screenMasters: ScreenMaster[];

  @Output() tabHandler = new EventEmitter<ScreenMaster>();
    @ViewChild('childMenu',{static:true}) public childMenu;
  constructor(public router: Router) { }

  ngOnInit() {
  }


  onPress(screenMaster:ScreenMaster){
    //console.log('YOU CLICK ON MENU TAB:',screenMaster);
    this.tabHandler.emit(screenMaster);
  }

}
