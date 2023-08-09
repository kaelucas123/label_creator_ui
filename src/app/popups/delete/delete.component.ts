import { Component } from '@angular/core';
import {AppComponent} from "../../app.component";
import {LabelService} from "../../service/label.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  constructor(public appComponent: AppComponent, private service: LabelService){}

  deleteLabel() {
    this.service.deleteLabel(this.appComponent.selectedLabel.id).subscribe(resp => {
      this.appComponent.labelListComponent.findAllLabels();
      this.appComponent.selectedPopup = '';
      this.appComponent.closePopup();
    });
  }
}
