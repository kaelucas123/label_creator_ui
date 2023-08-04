import {Component, EventEmitter, Output} from '@angular/core';
import {navbarData} from "./nav-data";
import {AppComponent} from "../app.component";

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  constructor(private app:AppComponent) {
  }

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  navData = navbarData;

  toggleCollapse(){
    this.collapsed =!this.collapsed;
    this.onToggleSideNav.emit({
      screenWidth: window.innerWidth,
      collapsed: this.collapsed
    });
  }
  closeSidenav(){
    this.collapsed = false;
    this.onToggleSideNav.emit({
      screenWidth: window.innerWidth,
      collapsed: this.collapsed
    });
  }

  selectFunction(functionName: string){
    this.app.function = functionName;
  }

}
