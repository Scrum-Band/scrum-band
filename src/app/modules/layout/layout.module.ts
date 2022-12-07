import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SbBackgroundComponent } from './components/sb-background/sb-background.component';
import { SbFooterComponent } from './components/sb-footer/sb-footer.component';
import { SbLangSelectorComponent } from './components/sb-lang-selector/sb-lang-selector.component';
import { SbLightSwitcherComponent } from './components/sb-light-switcher/sb-light-switcher.component';
import { SbSimpleDialogComponent } from './components/sb-simple-dialog/sb-simple-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material/material.module';
import { SbToolbarComponent } from './components/sb-toolbar/sb-toolbar.component';
import { AuthModule } from '../auth/auth.module';
import { SbSidenavComponent } from './components/sb-sidenav/sb-sidenav.component';
import { RouterModule } from '@angular/router';

const components = [
  SbLangSelectorComponent,
  SbLightSwitcherComponent,
  SbFooterComponent,
  SbSimpleDialogComponent,
  SbBackgroundComponent,
  SbToolbarComponent,
  SbSidenavComponent
];
@NgModule({
  declarations: [components],
  imports: [CommonModule, MaterialModule, TranslateModule, AuthModule, RouterModule],
  exports: [components]
})
export class LayoutModule {}
