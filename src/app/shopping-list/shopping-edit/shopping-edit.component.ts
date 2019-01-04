import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') nameInput: ElementRef;
  @ViewChild('amountNumber') amountNumber: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  onAdd(){

  }


}
