import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RiderService {

  // mock rider data will be replaced by API calls
  readonly riderList: Rider[] = [
    'Tadej Pogačar',
    'Jonas Vingegaard',
    'Remco Evenepoel',
    'Mathieu van der Poel',
    'Wout van Aert',
    'Primož Roglič',
    'Mads Pedersen',
    'Filippo Ganna',
    'Julian Alaphilippe',
    'Biniam Girmay',
  ].map(rider => ({ name: rider, click: Math.floor(Math.random() * 1001) }));

  getRiders() {
    return this.riderList;
  }
}

export interface Rider {
  name: string;
  click: number;
}
