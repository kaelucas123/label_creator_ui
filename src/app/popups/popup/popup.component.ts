import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AppComponent} from "../../app.component";


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  constructor(public appComponent: AppComponent){}

  private open(): void{
    this.appComponent.openPopup();
  }
}
