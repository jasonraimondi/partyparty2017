import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';

import { GuestService } from '../guest.service';

@Component({
    selector: 'guests',
    template: require('./guests.html'),
})

export class GuestListComponent implements OnInit {
    
    constructor(private guestService: GuestService) {
    }
    
    ngOnInit() {
    }
}
