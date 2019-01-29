import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientArrayEvent = new Subject<Ingredient[]>(); // Chnaged ingredients Array
  startedEditing = new Subject<number>(); // emit index of edit function as subject
  private ingredients: Ingredient[] = [
    new Ingredient('Egg', 12),
    new Ingredient('Tomatoes', 5),
    new Ingredient('Basil', 2)
  ];
  getIngredients() { // get the array of ingredients
    return this.ingredients.slice(); // get the copy of the ingredients array from slice array method
  }

  getIngredient(index: number) { // get a single Ingredient index
    return this.ingredients[index]; // return the ingredients index
  }

  addIngredient(ingredient: Ingredient) { // add ingredients in shopping list
    this.ingredients.push(ingredient); // original array is being changed
    this.ingredientArrayEvent.next(this.ingredients.slice()); // use event to prevent mutating array
    console.log(this.ingredientArrayEvent.next(this.ingredients.slice()));
  }
  // add ingredients array from recipe service to shopping list
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    console.log(this.ingredients);
    this.ingredientArrayEvent.next(this.ingredients.slice());
    console.log(this.ingredientArrayEvent.next(this.ingredients.slice()));
  }
  // update method to change the value
  updateIngredient(index: number, newIngredient: Ingredient) { //
    this.ingredients[index] = newIngredient; // get the ingredients index and assign newIngredient passed by user
    this.ingredientArrayEvent.next(this.ingredients.slice()); // call the event to emit the updated ingridients array
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientArrayEvent.next(this.ingredients.slice()); // return the nee copy of the modifiled array
  }
}
