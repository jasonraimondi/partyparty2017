import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';

import { GuestService } from '../guest.service';
import { ReversePipe } from '../../reverse.pipe';

@Component({
    selector: 'guests',
    template: require('./guests.html'),
    viewProviders: [ReversePipe]
})

export class GuestListComponent implements OnInit {
    
    constructor(private guestService: GuestService) {
    }
    
    ngOnInit() {
    }
}
