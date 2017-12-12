import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Guest, GuestService } from '../guest.service';

@Component({
  selector: 'guest',
  template: require('./guest.html')
})

export class GuestDetailComponent implements OnInit {
  // guest$: Observable<Guest>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GuestService
  ) {}

  ngOnInit() {
    // this.guest$ = this.route.paramMap
    //   .switchMap((params: ParamMap) =>
    //     this.service.getGuest(params.get('id')));
  }

  gotoGuests(guest: Guest) {
    // let guestId = guest ? guest.id : null;
    // Pass along the guest id if available
    // so that the GuestList component can select that guest.
    // Include a junk 'foo' property for fun.
    // this.router.navigate(['/guests', { id: guestId }]);
  }
}

