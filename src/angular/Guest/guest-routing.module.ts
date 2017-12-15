import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuestListComponent } from './guests/guests.component';
import { GuestDetailComponent } from './guest/guest.component';
import { PhotoListComponent } from './photos/photos.component';

export const guestsRoutes: Routes = [
    { path: 'photos',  component: PhotoListComponent },
    { path: 'guests',  component: GuestListComponent },
  { path: 'guests/:id', component: GuestDetailComponent }
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

export class GuestRoutingModule { }
