import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Memory, MemoryService } from '../memory.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'memory',
    template: require('./memory.html')
})

export class MemoryDetailComponent implements OnInit {
    private _memory$: Observable<Memory>;
    private _events$: Observable<any>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: MemoryService
    ) {
        this._memory$ = this.route.paramMap
            .switchMap((params: ParamMap) => this.service.getMemory(params.get('id')));

        this._events$ = this.route.paramMap
            .switchMap((params: ParamMap) => this.service.getEvents(params.get('id')));
    }

    get memory$(): Observable<Memory> {
        return this._memory$;
    }

    get events$(): Observable<Memory> {
        return this._events$;
    }

    ngOnInit() {
    }
}

