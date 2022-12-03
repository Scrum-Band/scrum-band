import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SbBackgroundComponent } from './sb-background/sb-background.component';
import { SbFooterComponent } from './sb-footer/sb-footer.component';
import { SbLangSelectorComponent } from './sb-lang-selector/sb-lang-selector.component';
import { SbLightSwitcherComponent } from './sb-light-switcher/sb-light-switcher.component';
import { SbSimpleDialogComponent } from './sb-simple-dialog/sb-simple-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material/material.module';
import { SbToolbarComponent } from './sb-toolbar/sb-toolbar.component';
import { AuthModule } from '../auth/auth.module';

const components = [
  SbLangSelectorComponent,
  SbLightSwitcherComponent,
  SbFooterComponent,
  SbSimpleDialogComponent,
  SbBackgroundComponent,
  SbToolbarComponent
];
@NgModule({
  declarations: [components],
  imports: [CommonModule, MaterialModule, TranslateModule, AuthModule],
  exports: [components]
})
export class LayoutModule {}
