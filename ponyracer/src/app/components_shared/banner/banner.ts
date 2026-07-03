import { Component } from '@angular/core';

@Component({
  selector: 'ns-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  bannerList: BannerItem[] = [
    {name: 'Home', url:'/'},
    {name: 'Races', url:'/races'},
    {name: 'Riders', url:'/riders'},
  ]

}

interface BannerItem {
  name: string,
  url: string
}
