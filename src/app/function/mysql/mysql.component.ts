import {Component} from '@angular/core';
import {LabelService} from "../../service/label.service";
import {AppComponent} from "../../app.component";
import {MatSnackBar, MatSnackBarHorizontalPosition} from "@angular/material/snack-bar";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {NotificationComponent} from "../../utils/notification/notification.component";

@Component({
  selector: 'app-mysql',
  templateUrl: './mysql.component.html',
  styleUrls: ['./mysql.component.scss']
})
export class MysqlComponent {

  constructor(private service: LabelService,
              private appComponent: AppComponent,
              private _snackBar: MatSnackBar,
              private dialog: MatDialog) {
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
      this.openWarnDialog();
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: "right"
    });
  }

  openWarnDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'dialog';
    const dialogRef = this.dialog.open(NotificationComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        // Lógica a ser executada quando o botão "Não" é clicado
      }
    });
  }
}
