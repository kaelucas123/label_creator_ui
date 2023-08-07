import {Component} from '@angular/core';
import {LabelService} from "../../service/label.service";
import {LabelCreator} from "../../model/label-creator";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  constructor(private service: LabelService, private appComponent: AppComponent) {
  }

  inputLabels: string = '';

  approved: string = "";
  reproved: string = "";

  labelCreator: LabelCreator = {
    quotes: [],
    idProject: this.appComponent.selectedProjectId
  }

  sendQuotes() {
    this.labelCreator.quotes = this.separateWords(this.inputLabels);
    this.approved = "";
    this.reproved = "";
    this.service.sendLabels(this.labelCreator).subscribe((resp) => {
        console.log(resp);
        for (const label of resp.body.body.approved) {
          this.approved += label.keyLabel + "\n";
        }
        for (const label of resp.body.body.reproved) {
          this.reproved += label.keyLabel + "\n";
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  separateWords(word: String) {
    word = word.trim();

    if (word === '') {
      return [];
    }

    var palavras = word.split("\n");

    palavras = palavras.map(function (palavra) {
      return palavra.trim();
    });

    return palavras;
  }

}
