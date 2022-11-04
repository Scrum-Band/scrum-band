import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "./services/language.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(
    public translate: TranslateService,
    private lang: LanguageService
  ) {
    this.lang.initLang();
  }
}
