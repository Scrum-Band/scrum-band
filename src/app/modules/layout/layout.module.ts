import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SbBackgroundComponent } from './sb-background/sb-background.component';
import { SbFooterComponent } from './sb-footer/sb-footer.component';
import { SbLangSelectorComponent } from './sb-lang-selector/sb-lang-selector.component';
import { SbLightSwitcherComponent } from './sb-light-switcher/sb-light-switcher.component';
import { SbSimpleDialogComponent } from './sb-simple-dialog/sb-simple-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material/material.module';

const components = [
  SbLangSelectorComponent,
  SbLightSwitcherComponent,
  SbFooterComponent,
  SbSimpleDialogComponent,
  SbBackgroundComponent
];
@NgModule({
  declarations: [components],
  imports: [CommonModule, MaterialModule, TranslateModule],
  exports: [components]
})
export class LayoutModule {}
