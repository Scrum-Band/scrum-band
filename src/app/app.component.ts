import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './modules/auth/services/auth.service';
import { SbToolbarComponent } from './modules/layout/sb-toolbar/sb-toolbar.component';
import { GuiService } from './services/gui/gui.service';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  public smallDisplay: boolean = true;
  public sidenavOpen: boolean = true;
  public signedIn: boolean = false;
  @ViewChild('sbSidenav') sbSidenav!: MatSidenav;
  @ViewChild('sbToolbar') sbToolbar!: SbToolbarComponent;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public translate: TranslateService,
    public guiService: GuiService,
    public authService: AuthService,
    private lang: LanguageService
  ) {}
  ngOnInit(): void {
    this.lang.initLang();
    this.authService.onAuthStateChanged.subscribe((userLogged: any) => {
      this.signedIn = userLogged ? true : false;
    });
    this.observeDisplaySize();
  }
  ngAfterViewInit(): void {
    this.sbToolbar.toggle.subscribe((open: boolean) => {
      this.toggle();
    });
  }
  ngOnDestroy(): void {
    this.authService.onAuthStateChanged.unsubscribe();
    this.sbToolbar.toggle.unsubscribe();
  }

  observeDisplaySize() {
    this.breakpointObserver.observe(['(max-width: 1200px)']).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.smallDisplay = true;
        this.sidenavOpen = false;
        if (this.sbSidenav) this.sbSidenav.close();
      } else {
        this.smallDisplay = false;
        this.sidenavOpen = true;
        if (this.sbSidenav) this.sbSidenav.open();
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

  toggle() {
    this.sbSidenav.toggle();
    this.sidenavOpen = this.sbSidenav.opened;
  }
}
