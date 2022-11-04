import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  availableLangs: string[] = ["en", "es"];
  defaultLang: string = "es";

  constructor(public translate: TranslateService) {}

  initLang() {
    this.translate.addLangs(this.availableLangs);
    this.translate.setDefaultLang(this.defaultLang);
  }

  getCurrentLang() {
    return this.translate.currentLang;
  }

  setLang(lang: string) {
    this.translate.use(lang);
  }
}
