import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SGViewerComponent } from './viewer/viewer.component';

const routes: Routes = [
  { path: '', component: SGViewerComponent },
  { path: 'viewer', component: SGViewerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SGRoutingModule {}
