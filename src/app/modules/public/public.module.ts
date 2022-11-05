import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PublicRoutingModule } from "./public-routing.module";
import { HomeComponent } from "./home/home.component";
import { PricingComponent } from "./pricing/pricing.component";
import { FeaturesComponent } from "./features/features.component";
import { MaterialModule } from "../material/material.module";
import { BackgroundComponent } from "./background/background.component";

@NgModule({
  declarations: [
    HomeComponent,
    PricingComponent,
    FeaturesComponent,
    BackgroundComponent,
  ],
  imports: [CommonModule, PublicRoutingModule, MaterialModule],
})
export class PublicModule {}
