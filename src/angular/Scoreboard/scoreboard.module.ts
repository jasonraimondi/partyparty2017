import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ScoreboardComponent } from './scoreboard.component';
import { ScoreboardRoutingModule } from './scoreboard-routing.module';
import { ScoreboardService } from './scoreboard.service';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ScoreboardRoutingModule,
  ],
  declarations: [
    ScoreboardComponent
  ],
  providers: [
    ScoreboardService
  ],
})

export class ScoreboardModule {
}
