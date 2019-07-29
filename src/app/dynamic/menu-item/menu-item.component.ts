import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenMaster } from 'src/app/model/screen-master';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
 
  @Input() screenMasters: ScreenMaster[];

  @ViewChild('childMenu',{static:true}) public childMenu;
  constructor(public router: Router) { }

  ngOnInit() {
  }

}
