import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreboardComponent } from './scoreboard.component';



export const guestsRoutes: Routes = [
  { path: 'scoreboard',  component: ScoreboardComponent },
  // { path: 'guests/:id', component: GuestDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(guestsRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})

export class ScoreboardRoutingModule { }
