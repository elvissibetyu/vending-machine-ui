import { Injectable } from '@angular/core';
import { IItem } from '../utils/interface/items.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  allItems = [
    {
      "item": "Sprite",
      "price": 1.25,
    },
    {
      "item": "Coke",
      "price": 2.00,
    },
    {
      "item": "Fanta",
      "price": 1.15,
    },
    {
      "item": "Stoney",
      "price": 1.50,
    },
    {
      "item": "Appletizer",
      "price": 2.00,
    },
    {
      "item": "Heineken",
      "price": 1.55,
    },
  ]

  constructor() { }

  // getalltimesromapi
  

  getAllItems(): IItem[] {
    return this.allItems;
  }
}
