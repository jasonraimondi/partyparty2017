import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

export class Guest {
//   constructor(
//     public id: string,
//     public firstName: string,
//     public efInvitationId: string
//   ) {
//   }
}

@Injectable()
export class GuestService {
  readonly eventId = '7fff5387-0000-45a0-a38a-5c260d22d3fb';

  private _guests$?: Observable<any[]>;

  constructor(private angularFire: AngularFireDatabase) {}

  get guests$() {
    if (this._guests$ == null) {
      this._guests$ = this.angularFire.list(this.eventId + '/guests').valueChanges();
    }

    return this._guests$;
  }

  // getGuest(id: string) {
    // return this.getGuestes()
    //   .map(guests => guests.find(guest => guest.id === id));
  // }
}
