import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'sb-lang-selector',
  templateUrl: './sb-lang-selector.component.html',
  styleUrls: ['./sb-lang-selector.component.scss']
})
export class SbLangSelectorComponent implements OnInit {
  constructor(private lang: LanguageService) {}

  availableLangs: string[] = this.lang.availableLangs;
  currentLang: string = this.lang.getCurrentLang();

  ngOnInit(): void {}

  setLang(lang: string) {
    this.lang.setLang(lang);
  }
}
