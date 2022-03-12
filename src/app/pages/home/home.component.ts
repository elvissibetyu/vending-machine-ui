import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  money = new FormControl('');
  change = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  onPurchase(): void {

  }

  onClear(): void {
    this.change.reset();
    this.money.reset();
  }

  onCancel(): void {
    
  }

}
