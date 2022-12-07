import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'www',
    loadChildren: () => import('./modules/public/public.module').then((m) => m.PublicModule)
  },
  {
    path: 'game-rules',
    loadChildren: () => import('./modules/game-rules/game-rules.module').then((m) => m.GameRulesModule)
  },
  {
    path: 'scrum-guide',
    loadChildren: () => import('./modules/scrum-guide/scrum-guide.module').then((m) => m.ScrumGuideModule)
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'settings',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/settings/settings.module').then((m) => m.SettingsModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
