import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ScoreboardService {
  readonly eventId = '7fff5387-0000-45a0-a38a-5c260d22d3fb';

  private scores$?: Observable<any[]>;

  constructor(private angularFire: AngularFireDatabase) {
    this.scores$ = this.angularFire.list(this.eventId + '/scores').valueChanges();
  }
}
