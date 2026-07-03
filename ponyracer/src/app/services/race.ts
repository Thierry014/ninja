import { Injectable, WritableSignal, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RaceService {

  // mock race data will be replace by API calls
  raceList: WritableSignal<Race[]> = signal([
    { name: 'Tour de France',        isSingleDay: false, timeStart: '2026-07-04T11:00:00Z' },
    { name: 'Paris–Roubaix',         isSingleDay: true,  timeStart: '2026-04-12T09:30:00Z' },
    { name: 'Milan–San Remo',        isSingleDay: true,  timeStart: '2026-03-21T10:00:00Z' },
    { name: "Giro d'Italia",         isSingleDay: false, timeStart: '2026-05-09T12:00:00Z' },
    { name: 'Vuelta a España',       isSingleDay: false, timeStart: '2026-08-22T13:00:00Z' },
    { name: 'Tour of Flanders',      isSingleDay: true,  timeStart: '2026-04-05T09:00:00Z' },
    { name: 'Liège–Bastogne–Liège',  isSingleDay: true,  timeStart: '2026-04-26T08:45:00Z' },
    { name: 'Amstel Gold Race',      isSingleDay: true,  timeStart: '2026-04-19T10:15:00Z' },
    { name: 'Il Lombardia',          isSingleDay: true,  timeStart: '2026-10-10T09:45:00Z' },
    { name: 'Strade Bianche',        isSingleDay: true,  timeStart: '2026-03-07T11:30:00Z' },
  ]);

  getRaces(){
    return this.raceList
  }

  addRace(name: string){
    this.raceList.update(list => [...list, {name:name}]
    )
  }
}

export interface Race {
  name: string;
  isSingleDay?: boolean;
  timeStart?: string;
}
