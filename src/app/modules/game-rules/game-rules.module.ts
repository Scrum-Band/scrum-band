import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRulesRoutingModule } from './game-rules-routing.module';
import { GameRulesComponent } from './game-rules.component';
import { ScrumGuideModule } from '../scrum-guide/scrum-guide.module';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [GameRulesComponent],
  imports: [CommonModule, GameRulesRoutingModule, ScrumGuideModule, MaterialModule, TranslateModule]
})
export class GameRulesModule {}
