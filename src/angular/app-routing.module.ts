import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { NotFoundComponent } from './NotFound/not-found.component';
import { ScoreboardComponent } from './Scoreboard/scoreboard.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/guests', pathMatch: 'full' },
  // { path: 'memory', redirectTo: '/memory', pathMatch: 'full' },
  // { path: 'scoreboard', redirectTo: '/scoreboard', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SelectivePreloadingStrategy
  ]
})

export class AppRoutingModule {
}
