import { Component } from '@angular/core';
import { ScoreboardService } from './scoreboard.service';

@Component({
  selector: 'scoreboard',
  template: require('./scoreboard.html'),
})

export class ScoreboardComponent {
    constructor(private ss: ScoreboardService) {

    }
}
