import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Network } from '@ngx-pwa/offline';
import { TranslateService } from '@ngx-translate/core';
import { SbToolbarComponent } from './modules/layout/components/sb-toolbar/sb-toolbar.component';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  public sidenavOpen: boolean = true;
  public online$;

  @ViewChild('sbSidenav') sbSidenav!: MatSidenav;
  @ViewChild('sbToolbar') sbToolbar!: SbToolbarComponent;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public translate: TranslateService,
    private lang: LanguageService,
    public network: Network
  ) {
    this.online$ = this.network.onlineChanges;
  }
  ngOnInit(): void {
    this.lang.initLang();
    this.observeDisplaySize();
  }
  ngAfterViewInit(): void {
    this.sbToolbar.toggle.subscribe((open: boolean) => {
      this.toggle();
    });
  }
  ngOnDestroy(): void {
    this.sbToolbar.toggle.unsubscribe();
  }
  toggle() {
    this.sbSidenav.toggle();
    this.sidenavOpen = this.sbSidenav.opened;
  }

  observeDisplaySize() {
    this.breakpointObserver.observe(['(max-width: 1200px)']).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.sidenavOpen = false;
        if (this.sbSidenav) this.sbSidenav.close();
      } else {
        this.sidenavOpen = true;
        if (this.sbSidenav) this.sbSidenav.open();
      }
    });
  }
}
