import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreboardComponent } from './scoreboard.component';



export const heroesRoutes: Routes = [
  { path: 'scoreboard',  component: ScoreboardComponent },
  // { path: 'heroes/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})

export class ScoreboardRoutingModule { }
