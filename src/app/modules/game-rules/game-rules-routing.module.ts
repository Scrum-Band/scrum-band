import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SGViewerComponent } from '../scrum-guide/viewer/viewer.component';
import { GameRulesComponent } from './game-rules.component';

const routes: Routes = [
  { path: '', component: GameRulesComponent },
  { path: 'basic-rules', component: SGViewerComponent },
  { path: 'advanced-rules', component: GameRulesComponent },
  { path: 'bestiary', component: GameRulesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRulesRoutingModule {}
