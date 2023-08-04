import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private http: HttpClient) {
  }

  apiUrl = 'http://localhost:8080/label/project';

  getAll(projectId: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + projectId);
  }
}
