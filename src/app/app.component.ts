import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Project} from "./model/project";
import {ProjectService} from "./service/project.service";
import {LabelListComponent} from "./function/label-list/label-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild(LabelListComponent, { static: false }) labelListComponent!: LabelListComponent;

  title = 'lable-creator-ui';
  function: string = 'CREATE';

  projects: Project[] = [
    {
      id: 20,
      name: 'string',
      devUrl: 'string',
      dataBaseName: 'string',
      prodUrl: 'string'
    }
  ];
  selectedProjectId: number = 1;
  selectedSystemLocaleId: string = '2';

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getAll().subscribe(resp => {
      this.projects = resp;
      console.log(this.projects);
    });
  }

  onProjectChange() {
    if(this.labelListComponent != undefined){
      this.labelListComponent.findAllLabels();
    }
  }

  translateFunctionName(): string{
    if (this.function === 'LIST') {
      return 'Listar';
    } else if (this.function === 'CREATE') {
      return 'Criar';
    } else if (this.function === 'EXCHANGE') {
      return 'Substituir';
    } else if (this.function === 'MYSQL') {
      return 'MySQL';
    } else {
      return '';
    }
  }
}
