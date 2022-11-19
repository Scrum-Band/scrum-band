import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/public/public.module').then((m) => m.PublicModule)
  },
  {
    path: 'scrum-guide',
    loadChildren: () => import('./modules/scrum-guide/scrum-guide.module').then((m) => m.ScrumGuideModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
