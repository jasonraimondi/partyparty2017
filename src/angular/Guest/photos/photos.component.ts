import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';

import { GuestService } from '../guest.service';

@Component({
    selector: 'photos',
    template: require('./photos.html'),
})

export class PhotoListComponent implements OnInit {
    
    constructor(private guestService: GuestService) {}
    
    ngOnInit() {
    }
}
