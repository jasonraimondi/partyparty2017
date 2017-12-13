import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemoryDetailComponent } from './memory/memory.component';

export const memoriesRoutes: Routes = [
  { path: 'memories/:id', component: MemoryDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(memoriesRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})

export class MemoryRoutingModule { }
