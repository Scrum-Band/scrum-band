import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'the-adventure', component: HomeComponent },
  { path: 'game-rules', component: HomeComponent },
  { path: 'character-sheet', component: HomeComponent },
  { path: 'sm-screen', component: HomeComponent },
  { path: 'FAQ', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
