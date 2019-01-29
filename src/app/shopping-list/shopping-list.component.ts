import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list-service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription; // create a private property type subscrption
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientArrayEvent
    .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
    });
  }
  onEdit(index: number) {
    this.shoppingListService.startedEditing.next(index); // use next to emit the index
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
