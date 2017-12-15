import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Guest, GuestService } from '../guest.service';
import { Observable } from 'rxjs/Observable';
import { MemoryEvent } from '../memory-event';

@Component({
    selector: 'guest',
    template: require('./guest.html')
})

export class GuestDetailComponent implements OnInit {
    readonly checkedInIcon = require('../../assets/checked-in.svg');
    readonly funFactCorrectIcon = require('../../assets/fun-fact-correct.svg');
    readonly karaokeIcon = require('../../assets/karaoke.svg');
    readonly rightPersonIcon = require('../../assets/pts-for-being-the-right-person.svg');
    
    private _memory$: Observable<MemoryEvent>;
    
    private _guest$: Observable<Guest>;
    private guestTagId: string | null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private guestService: GuestService,
    ) {
        this._guest$ = this.route.paramMap
            .switchMap((params: ParamMap) => {
                this.guestTagId = params.get('id');
                return this.guestService.getGuest(params.get('id'))
            });
    
        this._memory$ = this._guest$.switchMap((guest: any|Guest) => {
            return this.guestService.getDigitalMemoryBank(guest.efInvitationId);
        });
    }

    get guest$(): Observable<Guest> {
        return this._guest$;
    }
    
    get memory$(): Observable<MemoryEvent> {
        return this._memory$;
    }
    
    public getIconForMemory(event: MemoryEvent): any {
        if (event.isKaraoke) {
            return this.karaokeIcon;
        } else if (event.isCheckIn) {
            return this.checkedInIcon;
        } else if (event.isWeirdFact) {
            return this.funFactCorrectIcon;
        }
        
        return this.rightPersonIcon;
    }
    ngOnInit() {
    }
}

