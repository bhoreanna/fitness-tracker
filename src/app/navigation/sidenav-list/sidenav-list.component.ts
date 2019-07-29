import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sideNavClose: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onCloseSideNav(){
  this.sideNavClose.emit();
  }
}
