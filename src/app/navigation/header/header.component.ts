import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserRoleService } from 'src/app/shared/user-role/user-role.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() sideNavToggle: EventEmitter<any> = new EventEmitter();
  constructor(private userRoleService: UserRoleService) { }

  ngOnInit() {
  }

  onToggleSideNav(){
  this.sideNavToggle.emit('');
  }
}
