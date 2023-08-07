import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Html} from "../model/html";

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private http: HttpClient) {
  }

  apiUrl = 'http://localhost:8080/label';

  getAll(projectId: number): Observable<any> {
    return this.http.get(this.apiUrl + "/project" + '/' + projectId);
  }

  generateSql(projectId:number, systemLocaleId: string): Observable<any> {
    return this.http.get(this.apiUrl + "/sql/" + projectId, {params: {systemLocaleId: systemLocaleId}});
  }

  replaceHtml(projectId:number, html:Html): Observable<any> {
    return this.http.post(this.apiUrl + "/translate/" + projectId, html);
  }
}
