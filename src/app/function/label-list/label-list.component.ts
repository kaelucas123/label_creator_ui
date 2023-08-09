import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Label} from "../../model/label";
import {LabelService} from "../../service/label.service";
import {AppComponent} from "../../app.component";
import { Clipboard } from "@angular/cdk/clipboard";
import {map, Observable, of, startWith} from "rxjs";
import {FormControl} from "@angular/forms";
import {PopupComponent} from "../../popups/popup/popup.component";


@Component({
  selector: 'app-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.scss']
})
export class LabelListComponent implements OnInit {
  constructor(private labelService: LabelService,
              private appComponent: AppComponent,
              private clipboard: Clipboard,
    ) {
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
    { "created_at": "28/07/2023", "keyLabel": "label_create", "value": "Create"},
    { "created_at": "28/07/2023", "keyLabel": "label_replace", "value": "Replace"},
    { "created_at": "28/07/2023", "keyLabel": "label_replace", "value": "REPLACE"},
    { "created_at": "28/07/2023", "keyLabel": "label_please,_list", "value": "Listar"},
    { "created_at": "28/07/2023", "keyLabel": "label_please,_list", "value": "Please, list"},
    { "created_at": "28/07/2023", "keyLabel": "label_mysql", "value": "MySQL"},
    { "created_at": "28/07/2023", "keyLabel": "label_mysql", "value": "MySQL"},
    { "created_at": "28/07/2023", "keyLabel": "label_create", "value": "Criar"}
  ];
  dataSource: MatTableDataSource<Label> = new MatTableDataSource<Label>(this.data);
  index: number = 0;
  filteredData: Observable<Label[]> = new Observable<Label[]>();
  @Input() projectId: number = 0;
  myControl = new FormControl('');
  hasResult: boolean = false;

  ngOnInit(): void {
    this.findAllLabels();

    this.filteredData = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  findAllLabels() {
    console.log(this.appComponent.selectedProjectId);
    this.labelService.getAll(this.appComponent.selectedProjectId).subscribe(resp => {
        this.data = resp;
        console.log(this.dataSource.data);
      },
      error => console.error(error));
  }

  private _filter(value: string): Label[] {
    const filterValue = value.toLowerCase();

    return this.data.filter(option => option.value.toLowerCase().includes(filterValue));
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

  copyRow(label: Label): void {
    const formatted_key = `{{ "${label.keyLabel}" | translate }}`;
    this.clipboard.copy(formatted_key);
  }
  editRow() {
    this.appComponent.selectedPopup = 'EDIT'
    this.appComponent.openPopup();
  }

  deleteRow() {
    this.appComponent.selectedPopup = 'DELETE'
    this.appComponent.openPopup();
  }


}
