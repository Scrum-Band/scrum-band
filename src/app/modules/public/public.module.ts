import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { FeatureChipComponent } from './features/chip/chip.component';
import { ImprovementsComponent } from './features/improvements/improvements.component';
import { ScrumPhasesComponent } from './scrum-phases/scrum-phases.component';
import { ScrumGuideModule } from '../scrum-guide/scrum-guide.module';

@NgModule({
  declarations: [
    HomeComponent,
    PricingComponent,
    FeaturesComponent,
    ScrumPhasesComponent,
    FeatureChipComponent,
    ImprovementsComponent
  ],
  imports: [CommonModule, PublicRoutingModule, MaterialModule, TranslateModule, ScrumGuideModule],
  exports: [FeatureChipComponent, ImprovementsComponent]
})
export class PublicModule {}
