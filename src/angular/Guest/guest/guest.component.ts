import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Guest, GuestService } from '../guest.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'guest',
    template: require('./guest.html')
})

export class GuestDetailComponent implements OnInit {
    private _guest$: Observable<Guest>;
    
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: GuestService
    ) {
        this._guest$ = this.route.paramMap
            .switchMap((params: ParamMap) => this.service.getGuest(params.get('id')));
    }
    
    get guest$(): Observable<Guest> {
        return this._guest$;
    }
    
    ngOnInit() {
    }
}

