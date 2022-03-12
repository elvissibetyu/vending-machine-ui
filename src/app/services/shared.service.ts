import { Injectable } from '@angular/core';
import { IItem } from '../utils/interface/items.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  selectedIndex!: number;
  userChange: number;

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

  constructor() { 
    this.userChange = 0;
  }

  // getalltimesromapi

  get getUserChange(): number {
    return this.userChange;
  }

  set setUserChange(change: number) {
    this.userChange = change;
  }
  

  getAllItems(): IItem[] {
    return this.allItems;
  }

  set setSelectedIndex(index: any) {
    this.selectedIndex = index;
  }

  get getSelectedIndex(): number {
    return this.selectedIndex;
  }
}
