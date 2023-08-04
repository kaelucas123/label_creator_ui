import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Label} from "../../model/label";
import {LabelService} from "../../service/label.service";

@Component({
  selector: 'app-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.scss']
})
export class LabelListComponent implements OnInit {
  constructor(private labelService: LabelService) {
  }

  displayedColumns: string[] = ['id', 'created_at', 'keyLabel', 'value', 'system_locale_id', 'actions'];
  data: Label[] = [];
  dataSource: MatTableDataSource<Label> = new MatTableDataSource<Label>(this.data);

  @Input() projectId: number = 0;

  ngOnInit(): void {
    this.findAllLabels();
  }

  findAllLabels() {
    this.labelService.getAll(this.projectId).subscribe(resp => {
        this.dataSource = new MatTableDataSource<Label>(resp);
        console.log(this.dataSource);
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
