import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

export class Guest {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public efInvitationId: string
  ) {
  }
}

@Injectable()
export class GuestService {
    readonly guestPath = '7fff5387-0000-45a0-a38a-5c260d22d3fb/guests';
    readonly memoryPath = '7fff5387-0000-45a0-a38a-5c260d22d3fb/digitalMemoryBank';

    private _guests$?: Observable<Guest[]>;
    private _guestList$?: AngularFireList<any>;

    constructor(private angularFire: AngularFireDatabase) {
        this._guestList$ = this.angularFire.list(this.guestPath, (ref) => {
            return ref.orderByChild('score');
        });
        this._guests$ = this._guestList$.snapshotChanges().map(changes => {
            return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
        });
    }

    get guests$() {
        return this._guests$;
    }
    
    getDigitalMemoryBank(id: string): Observable<any> {
        return this.angularFire
            .object(this.memoryPath + '/' + id)
            .valueChanges();
    }

    getGuest(id: string): Observable<Guest> {
        return this.angularFire.object(this.guestPath + '/' + id).valueChanges().map((guest: any) => {
            return new Guest(guest.id, guest.firstName, guest.lastName, guest.efInvitationId);
        });
    }
}
