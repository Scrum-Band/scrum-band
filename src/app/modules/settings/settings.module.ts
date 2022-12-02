import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsViewerComponent } from './components/viewer/viewer.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [SettingsViewerComponent],
  imports: [CommonModule, SettingsRoutingModule, MaterialModule]
})
export class SettingsModule {}
