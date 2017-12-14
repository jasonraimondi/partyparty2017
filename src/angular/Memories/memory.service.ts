import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';

export class MemoryEvent {
    constructor(public text?: 'Karaoke'|'WeirdFact'|'CheckIn'|string,
                public title?: string,
                public timestamp?: number) {
    }

    get isKaraoke(): boolean {
        return this.text === 'Karaoke';
    }

    get isWeirdFact(): boolean {
        return this.text === 'WeirdFact';
    }

    get isCheckIn(): boolean {
        return this.text === 'CheckIn';
    }
}

@Injectable()
export class MemoryService {
    readonly memoryPath = '7fff5387-0000-45a0-a38a-5c260d22d3fb/digitalMemoryBank';

    constructor(private angularFire: AngularFireDatabase) {
    }

    getEvents(id: string): Observable<MemoryEvent> {
        return this.angularFire.list(this.memoryPath + '/' + id + '/events').valueChanges().map((event: any) => {
            return new MemoryEvent(event.text, event.title, event.title);
        });
    }

    getDigitalMemoryBank(id: string): Observable<any> {
        return this.angularFire
            .object(this.memoryPath + '/' + id)
            .valueChanges();
    }
}
