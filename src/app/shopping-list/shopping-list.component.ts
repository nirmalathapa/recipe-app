import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Egg', 12),
    new Ingredient('Tomatoes', 5),
    new Ingredient('Basil', 2)
  ];
  constructor() { }

  ngOnInit() {
  }

}
