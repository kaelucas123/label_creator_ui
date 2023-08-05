import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Label} from "../../model/label";
import {LabelService} from "../../service/label.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.scss']
})
export class LabelListComponent implements OnInit {
  constructor(private labelService: LabelService, private appComponent: AppComponent) {
  }

  displayedColumns: string[] = ['created_at', 'keyLabel', 'value', 'actions'];
  // data: Label[] = [];
  data: Label[] = [
    { "created_at": "27/07/2023", "keyLabel": "label_status", "value": "Status"},
    { "created_at": "27/07/2023", "keyLabel": "label_status", "value": "Status"},
    { "created_at": "27/07/2023", "keyLabel": "label_add_approver", "value": "Adicionar Aprovador"},
    { "created_at": "27/07/2023", "keyLabel": "label_add_approver", "value": "Add Approver"},
    { "created_at": "27/07/2023", "keyLabel": "label_action", "value": "Ação"},
    { "created_at": "27/07/2023", "keyLabel": "label_action", "value": "Action"},
    { "created_at": "27/07/2023", "keyLabel": "label_approver_calculation_parameters", "value": "Aprovador Parâmetros de Cálculo"},
    { "created_at": "27/07/2023", "keyLabel": "label_approver_calculation_parameters", "value": "Approver Calculation Parameters"},
    { "created_at": "28/07/2023", "keyLabel": "label_replace", "value": "Replace"},
    { "created_at": "28/07/2023", "keyLabel": "label_replace", "value": "REPLACE"},
    { "created_at": "28/07/2023", "keyLabel": "label_please,_list", "value": "Listar"},
    { "created_at": "28/07/2023", "keyLabel": "label_please,_list", "value": "Please, list"},
    { "created_at": "28/07/2023", "keyLabel": "label_mysql", "value": "MySQL"},
    { "created_at": "28/07/2023", "keyLabel": "label_mysql", "value": "MySQL"},
    { "created_at": "28/07/2023", "keyLabel": "label_create", "value": "Criar"},
    { "created_at": "28/07/2023", "keyLabel": "label_create", "value": "Create"} ];
  dataSource: MatTableDataSource<Label> = new MatTableDataSource<Label>(this.data);

  @Input() projectId: number = 0;

  ngOnInit(): void {
    this.findAllLabels();
  }

  findAllLabels() {
    console.log(this.appComponent.selectedProjectId);
    this.labelService.getAll(this.appComponent.selectedProjectId).subscribe(resp => {
        this.dataSource = new MatTableDataSource<Label>(resp);
        console.log(this.dataSource.data);
      },
      error => console.error(error));
  }

  getColumnLabel(column: string): string {
    switch (column) {
      case 'created_at':
        return 'Created At';
      case 'keyLabel':
        return 'Key Label';
      case 'value':
        return 'Value';
      case 'actions':
        return 'Actions';
      default:
        return '';
    }
  }

  copyRow(element: Label) {

  }

  editRow(element: Label) {

  }

  deleteRow(element: Label) {

  }


}
