import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeaturesComponent } from "./features/features.component";
import { HomeComponent } from "./home/home.component";
import { PricingComponent } from "./pricing/pricing.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "pricing", component: PricingComponent },
  { path: "features", component: FeaturesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
