import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestDetailComponent } from './guest/guest.component';
import { GuestListComponent } from './guests/guests.component';
import { GuestService } from './guest.service';
import { ReversePipe } from '../reverse.pipe';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        GuestRoutingModule,
    ],
    declarations: [
        GuestDetailComponent,
        GuestListComponent,
        ReversePipe,
    ],
    providers: [
        GuestService,
    ]
})

export class GuestModule {
}
