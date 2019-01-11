import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientArrayEvent = new EventEmitter<Ingredient[]>(); // event emitter that emits ingredient array
  private ingredients: Ingredient[] = [
    new Ingredient('Egg', 12),
    new Ingredient('Tomatoes', 5),
    new Ingredient('Basil', 2)
  ];
  getIngredients() {
    return this.ingredients; // get the copy of the ingredients array from slice array method
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientArrayEvent.emit(this.ingredients.slice()); // emmits the copy of an array
  }
  // add ingredients array to the recipe service
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    console.log(this.ingredients);
    this.ingredientArrayEvent.emit(this.ingredients.slice());
    console.log(this.ingredientArrayEvent.emit(this.ingredients.slice()));
  }
}
