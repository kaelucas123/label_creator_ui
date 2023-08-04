import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:8080/project';

  getAll():Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
