import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { GalleryConfig, GalleryModule } from 'ng-gallery';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestDetailComponent } from './guest/guest.component';
import { GuestListComponent } from './guests/guests.component';
import { GuestService } from './guest.service';
import { UtilitiesModule } from '../utilities/utilities.module';
import { PhotoListComponent } from './photos/photos.component';

const config: GalleryConfig = {
};

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        UtilitiesModule,
        BrowserAnimationsModule,
        GalleryModule.forRoot(config),
        GuestRoutingModule,
    ],
    declarations: [
        GuestDetailComponent,
        GuestListComponent,
        PhotoListComponent,
    ],
    providers: [
        GuestService,
    ]
})

export class GuestModule {
}
