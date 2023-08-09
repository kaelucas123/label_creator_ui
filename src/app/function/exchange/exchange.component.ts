import {Component} from '@angular/core';
import {Html} from "../../model/html";
import {LabelService} from "../../service/label.service";
import {AppComponent} from "../../app.component";
import format from "html-format";

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent {
  constructor(private service: LabelService, private appComponent: AppComponent) {
  }

  html: Html = {
    html: ""
  };

  responseHtml = "";
  loading: boolean = false;

  replaceHtml() {
    this.responseHtml = '';
    this.loading = true;
    this.service.replaceHtml(this.appComponent.selectedProjectId, this.html).subscribe(data => {
      this.responseHtml = data.html;
      this.loading = false;
      this.responseHtml = this.responseHtml.replace(/^\s*[\r\n]/gm, '');
    }, error => {
      console.log(error);
    });
  }
}
