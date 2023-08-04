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

  displayedColumns: string[] = ['id', 'created_at', 'keyLabel', 'value', 'system_locale_id', 'actions'];
  // data: Label[] = [];
  data: Label[] = [
    { "id": 157, "created_at": "27/07/2023", "keyLabel": "label_status", "value": "Status", "system_locale_id": 1 },
    { "id": 158, "created_at": "27/07/2023", "keyLabel": "label_status", "value": "Status", "system_locale_id": 2 },
    { "id": 159, "created_at": "27/07/2023", "keyLabel": "label_add_approver", "value": "Adicionar Aprovador", "system_locale_id": 1 },
    { "id": 160, "created_at": "27/07/2023", "keyLabel": "label_add_approver", "value": "Add Approver", "system_locale_id": 2 },
    { "id": 161, "created_at": "27/07/2023", "keyLabel": "label_action", "value": "Ação", "system_locale_id": 1 },
    { "id": 162, "created_at": "27/07/2023", "keyLabel": "label_action", "value": "Action", "system_locale_id": 2 },
    { "id": 163, "created_at": "27/07/2023", "keyLabel": "label_approver_calculation_parameters", "value": "Aprovador Parâmetros de Cálculo", "system_locale_id": 1 },
    { "id": 164, "created_at": "27/07/2023", "keyLabel": "label_approver_calculation_parameters", "value": "Approver Calculation Parameters", "system_locale_id": 2 },
    { "id": 165, "created_at": "28/07/2023", "keyLabel": "label_replace", "value": "Replace", "system_locale_id": 1 },
    { "id": 166, "created_at": "28/07/2023", "keyLabel": "label_replace", "value": "REPLACE", "system_locale_id": 2 },
    { "id": 167, "created_at": "28/07/2023", "keyLabel": "label_please,_list", "value": "Listar", "system_locale_id": 1 },
    { "id": 168, "created_at": "28/07/2023", "keyLabel": "label_please,_list", "value": "Please, list", "system_locale_id": 2 },
    { "id": 169, "created_at": "28/07/2023", "keyLabel": "label_mysql", "value": "MySQL", "system_locale_id": 1 },
    { "id": 170, "created_at": "28/07/2023", "keyLabel": "label_mysql", "value": "MySQL", "system_locale_id": 2 },
    { "id": 171, "created_at": "28/07/2023", "keyLabel": "label_create", "value": "Criar", "system_locale_id": 1 },
    { "id": 172, "created_at": "28/07/2023", "keyLabel": "label_create", "value": "Create", "system_locale_id": 2 } ];
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
      case 'id':
        return 'ID';
      case 'created_at':
        return 'Created At';
      case 'keyLabel':
        return 'Key Label';
      case 'value':
        return 'Value';
      case 'system_locale_id':
        return 'System Locale ID';
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
