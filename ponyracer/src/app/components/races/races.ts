import {Component, inject} from '@angular/core';
import {DatePipe} from '@angular/common';
import {RaceService} from '../../services/race';

@Component({
  selector: 'ns-races',
  imports: [DatePipe],
  templateUrl: './races.html',
  styleUrl: './races.css',
})
export class Races {
  private raceService = inject(RaceService);
  readonly races = this.raceService.getRaces();
  // readonly races = this.raceService.getRaces().slice(0, 8);

  // constructor(private raceService: RaceService) {}
}
