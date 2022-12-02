import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsViewerComponent } from './components/viewer/viewer.component';

const routes: Routes = [{ path: '', component: SettingsViewerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
