import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  change = new FormControl('');
  form: FormGroup;
  error: boolean;
  itemError: boolean;
  userChange!: number;

  constructor(public sharedService: SharedService, private formBuilder: FormBuilder) { 
    this.error = false;
    this.itemError = false;
    this.form = this.formBuilder.group({
      money: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {}

  onPurchase(): void {
    if (this.sharedService.getSelectedIndex === null || this.sharedService.getSelectedIndex === undefined) {
      this.itemError = true;
    }
    if (!this.form.valid || this.form.controls['money'].value === 0) {
      this.error = true;
    } 
    if (!this.change.valid) {

    }
  }

  onClear(): void {
    this.change.reset();
    this.form.get('money')?.reset();
    this.error = false;
    this.itemError = false;
  }

  onCancel(): void {
    
  }

  handleInput(event: any): void {
    console.log(event.data * 5);
    this.form.controls['money'].setValue(event.data * 5);
    if (this.sharedService.getSelectedIndex !== undefined) {
      this.userChange = this.form.controls['money'].value - this.sharedService.allItems[this.sharedService.getSelectedIndex].price;
      this.sharedService.setUserChange = this.form.controls['money'].value - this.sharedService.allItems[this.sharedService.getSelectedIndex].price;
    }
  }

}
