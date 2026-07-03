import {Component, inject} from '@angular/core';
import {RiderService} from '../../services/rider';

@Component({
  selector: 'ns-rider-popular',
  imports: [],
  templateUrl: './rider-popular.html',
  styleUrl: './rider-popular.css',
})
export class RiderPopular {
  private riderService = inject(RiderService);

  // copy before sorting so we don't mutate the service's array
  favouriteRiders = [...this.riderService.getRiders()]
    .sort((a, b) => b.click - a.click);
}
