import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  // tslint:disable-next-line:variable-name
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'in the heart of New York City',
      // tslint:disable-next-line:max-line-length
      'https://images.mansionglobal.com/im-126794?size=1.5005861664712778&width=640',
      149.99,
      new Date('2020-02-09'),
      new Date('2020-02-24')
    ),
    new Place(
      'p2',
      'L\'Amour toujours',
      'A romantic place in paris',
      'https://live.staticflickr.com/614/31628747276_00dedc1560_b.jpg',
      189.99,
      new Date('2020-03-01'),
      new Date('2020-03-18')
    ),
    new Place(
      'p3',
      'Hilton Hotel Cameroon',
      'The place to be',
      'https://pix10.agoda.net/hotelImages/6797070/0/0647b988373231c34b56e93b7c9be498.jpg?s=1024x768',
      219.99,
      new Date('2020-03-06'),
      new Date('2020-03-13')
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
