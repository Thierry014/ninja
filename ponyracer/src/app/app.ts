import {Component, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {Banner} from './components_shared/banner/banner';
import {Races} from './components/races/races';
import {RiderPopular} from './components/rider-popular/rider-popular';
import {AddRaceForm} from './components_shared/add-race-form/add-race-form';

@Component({
  selector: 'ns-root',
  imports: [Races, RiderPopular, Banner, AddRaceForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('Home');
  // public count: Signal<number> = signal(42)
  // public x: WritableSignal<any> = signal<TestDict>({
  //   "name":'foo',
  //   "color":'bar'
  // })

  constructor() {

  }
  // plain property driving the child's @Input
  currentRaceId = 1;

  ngOnInit() {

  }

}

interface TestDict {
  name: string
  color: string
}
