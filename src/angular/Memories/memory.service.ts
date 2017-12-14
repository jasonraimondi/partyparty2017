import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

export class Memory {
}

@Injectable()
export class MemoryService {
  readonly memoryPath = '7fff5387-0000-45a0-a38a-5c260d22d3fb/digitalMemoryBank';

  constructor(private angularFire: AngularFireDatabase) {
  }

  getEvents(id: string): Observable<any> {
    return this.angularFire.list(this.memoryPath + '/' + id + '/events').valueChanges();
  }

  getMemory(id: string): Observable<Memory> {
    return this.angularFire.object(this.memoryPath + '/' + id).valueChanges();
  }
}
