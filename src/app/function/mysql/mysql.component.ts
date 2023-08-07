import {Component} from '@angular/core';
import {LabelService} from "../../service/label.service";
import {AppComponent} from "../../app.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-mysql',
  templateUrl: './mysql.component.html',
  styleUrls: ['./mysql.component.scss']
})
export class MysqlComponent {

  constructor(private service: LabelService, private appComponent: AppComponent) {
  }

  sqlResponse: string = '';
  hasLabel: boolean = true;
  message: string = '';

  generateSql() {
    this.service.generateSql(this.appComponent.selectedProjectId, this.appComponent.selectedSystemLocaleId).subscribe(data => {
      console.log(data);
      this.sqlResponse = data.body;
      this.hasLabel = true;
    }, error => {
      console.log(error);
      this.message = error.error.message;
      this.hasLabel = false;
    });

  }
}
