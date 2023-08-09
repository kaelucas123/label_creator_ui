import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  constructor(public appComponent: AppComponent){}

}
