import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { MemoryEvent, MemoryService } from '../memory.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'memory',
    template: require('./memory.html')
})

export class MemoryDetailComponent implements OnInit {
    readonly checkedInIcon = require('../../assets/checked-in.svg');
    readonly funFactCorrectIcon = require('../../assets/fun-fact-correct.svg');
    readonly karaokeIcon = require('../../assets/karaoke.svg');
    readonly rightPersonIcon = require('../../assets/pts-for-being-the-right-person.svg');

    private _memory$: Observable<MemoryEvent>;
    private _events$: Observable<any>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: MemoryService
    ) {
        this._memory$ = this.route.paramMap
            .switchMap((params: ParamMap) => this.service.getDigitalMemoryBank(params.get('id')));

        this._events$ = this.route.paramMap
            .switchMap((params: ParamMap) => this.service.getEvents(params.get('id')));
    }

    get memory$(): Observable<MemoryEvent> {
        return this._memory$;
    }

    get events$(): Observable<MemoryEvent> {
        return this._events$;
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

