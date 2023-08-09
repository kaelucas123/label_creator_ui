import {Component, Input} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AppComponent} from "../../app.component";
import {Label} from "../../model/label";
import {LabelService} from "../../service/label.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  constructor(public appComponent: AppComponent, private service: LabelService){}

  label: Label = this.appComponent.selectedLabel;

  editLabel() {
    this.service.editLabel(this.label).subscribe(resp => {

      this.appComponent.labelListComponent.findAllLabels();
    });
    this.appComponent.closePopup();
  }
}
