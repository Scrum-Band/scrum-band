import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { ImprovementsComponent } from './features/improvements/improvements.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'prefix' },
  { path: 'home', component: HomeComponent },
  { path: 'adventures', component: HomeComponent },
  { path: 'game-rules', component: HomeComponent },
  { path: 'character-sheet', component: HomeComponent },
  { path: 'sm-screen', component: HomeComponent },
  { path: 'improvements', component: ImprovementsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
