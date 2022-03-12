import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})
export class AllItemsComponent implements OnInit {

  // @Output() onSubmit EventEmitter<unknown> = new EventEmitter<unknown>
  form: FormGroup;

  constructor(public sharedService: SharedService, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      selectedItem: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
