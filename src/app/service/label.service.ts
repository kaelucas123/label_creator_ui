import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Html} from "../model/html";
import {LabelCreator} from "../model/label-creator";
import {Label} from "../model/label";

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

  sendLabels(labelCreator:LabelCreator): Observable<any> {
    return this.http.post(this.apiUrl, labelCreator, {observe: 'response'});
  }

  editLabel(label:Label): Observable<any> {
    return this.http.put(this.apiUrl, label);
  }

  deleteLabel(labelId:number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + labelId);
  }
}
