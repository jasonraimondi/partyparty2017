import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

export class Hero {
//   constructor(
//     public id: string,
//     public firstName: string,
//     public efInvitationId: string
//   ) {
//   }
}

@Injectable()
export class HeroService {
  readonly eventId = '7fff5387-0000-45a0-a38a-5c260d22d3fb';

  private _heroes$?: Observable<any[]>;

  constructor(private angularFire: AngularFireDatabase) {}

  get heroes$() {
    if (this._heroes$ == null) {
      this._heroes$ = this.angularFire.list(this.eventId + '/guests').valueChanges();
    }

    return this._heroes$;
  }

  // getHero(id: string) {
    // return this.getHeroes()
    //   .map(heroes => heroes.find(hero => hero.id === id));
  // }
}
