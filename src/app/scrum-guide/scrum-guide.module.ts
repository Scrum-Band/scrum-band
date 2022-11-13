import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SGViewerComponent } from './viewer/viewer.component';
import { SGRoutingModule } from './scrum-guide-routing.module';
import { MaterialModule } from '../modules/material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { ChangesComponent } from './components/changes/changes.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { EndNoteComponent } from './components/end-note/end-note.component';
import { ArtifactsComponent } from './components/artifacts/artifacts.component';
import { EventsComponent } from './components/events/events.component';
import { TeamComponent } from './components/team/team.component';
import { ValuesComponent } from './components/values/values.component';
import { TheoryComponent } from './components/theory/theory.component';
import { DefinitionComponent } from './components/definition/definition.component';
import { PurposeComponent } from './components/purpose/purpose.component';
import { IntroComponent } from './components/intro/intro.component';
import { AttributionComponent } from './components/attribution/attribution.component';
import { FullGuideComponent } from './components/full-guide/full-guide.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { ProductOwnerComponent } from './components/product-owner/product-owner.component';
import { ScrumMasterComponent } from './components/scrum-master/scrum-master.component';
import { SprintComponent } from './components/sprint/sprint.component';
import { PlanningComponent } from './components/planning/planning.component';
import { DailyComponent } from './components/daily/daily.component';
import { ReviewComponent } from './components/review/review.component';
import { RetrospectiveComponent } from './components/retrospective/retrospective.component';
import { ProductBacklogComponent } from './components/product-backlog/product-backlog.component';
import { SprintBacklogComponent } from './components/sprint-backlog/sprint-backlog.component';
import { IncrementComponent } from './components/increment/increment.component';

@NgModule({
	declarations: [SGViewerComponent, ChangesComponent, ThanksComponent, EndNoteComponent, ArtifactsComponent, EventsComponent, TeamComponent, ValuesComponent, TheoryComponent, DefinitionComponent, PurposeComponent, IntroComponent, AttributionComponent, FullGuideComponent, DevelopersComponent, ProductOwnerComponent, ScrumMasterComponent, SprintComponent, PlanningComponent, DailyComponent, ReviewComponent, RetrospectiveComponent, ProductBacklogComponent, SprintBacklogComponent, IncrementComponent],
	imports: [CommonModule, SGRoutingModule, MaterialModule, TranslateModule],
	exports: [
   ChangesComponent,
   ThanksComponent,
   EndNoteComponent,
   ArtifactsComponent,
   EventsComponent,
   TeamComponent,
   ValuesComponent,
   TheoryComponent,
   DefinitionComponent,
   PurposeComponent,
   IntroComponent,
   AttributionComponent,
   FullGuideComponent,
   DevelopersComponent,
   ProductOwnerComponent,
   ScrumMasterComponent,
   SprintComponent,
   PlanningComponent,
   DailyComponent,
   ReviewComponent,
   RetrospectiveComponent,
   ProductBacklogComponent,
   SprintBacklogComponent,
   IncrementComponent
	]
})
export class ScrumGuideModule {}
