import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TranslateService } from '@ngx-translate/core';
import { GuiService } from './services/gui/gui.service';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isMobileDisplay: boolean = true;
  constructor(
    public translate: TranslateService,
    public guiService: GuiService,
    private lang: LanguageService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.lang.initLang();
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.isMobileDisplay = true;
      } else {
        this.isMobileDisplay = false;
      }
    });
  }

  public MENU = [
    { name: 'the-adventure', icon: 'signpost' },
    { name: 'game-rules', icon: 'menu_book' },
    { name: 'character-sheet', icon: 'badge' },
    { name: 'sm-screen', icon: 'smart_screen' },
    { name: 'FAQ', icon: 'quiz' }
  ];

  @ViewChild('sbSidenav') sbSidenav!: MatSidenav;

  toggle() {
    console.log('TOOOOOOGGLE');
    this.sbSidenav.toggle();
  }
}
