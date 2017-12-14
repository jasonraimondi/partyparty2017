import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Guest, GuestService } from '../guest.service';
import { Observable } from 'rxjs/Observable';
import {MemoryService} from "../../Memories/memory.service";

@Component({
    selector: 'guest',
    template: require('./guest.html')
})

export class GuestDetailComponent implements OnInit {
    private _guest$: Observable<Guest>;
    private guestTagId: string | null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private guestService: GuestService,
        private memoryService: MemoryService
    ) {
        this._guest$ = this.route.paramMap
            .switchMap((params: ParamMap) => {
                this.guestTagId = params.get('id');
                return this.guestService.getGuest(params.get('id'))
            });
    }

    get guest$(): Observable<Guest> {
        return this._guest$;
    }

    ngOnInit() {
    }
}

