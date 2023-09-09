import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  openSideBar:boolean = false;

  toggleSidebar(){
    this.openSideBar = !this.openSideBar;
  }

}
