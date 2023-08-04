import {Component, OnInit} from '@angular/core';
import {Project} from "./model/project";
import {ProjectService} from "./service/project.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'lable-creator-ui';
  function: string = '';
  projects: Project[] = [
    {
      id: 20,
      name: 'string',
      devUrl: 'string',
      dataBaseName: 'string',
      prodUrl: 'string'
    }
  ];
  selectedProjectId: number = 0;

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
}
