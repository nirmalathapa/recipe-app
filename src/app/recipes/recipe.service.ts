import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list-service';

@Injectable() // to inject service into the service use @injectable
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [ // private makes sure that it won't be able be accessed from outside
    // tslint:disable-next-line:max-line-length
    new Recipe('Shaksuka',
    'Poached egg in a tamato sauce',
    'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.onceuponachef.com%2Fimages%2F2017%2F06%2FShakshuka_-2.jpg&f=1',
    [
      new Ingredient('eggs', 5),
      new Ingredient('tomatoes', 10)
    ]),
    // tslint:disable-next-line:max-line-length
    new Recipe('Fresh Pasta',
    'Fresh pasta with cheese and egg',
    // tslint:disable-next-line:max-line-length
    'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2016%2F01%2Fmain%2F1601p25-skillet-chicken-roasted-potatoes-carrots.jpg%3Fitok%3DMcbboinY&f=1',
    [
      new Ingredient('pasta', 1),
      new Ingredient('cheese', 1)
    ]),
    // tslint:disable-next-line:max-line-length
    new Recipe('Fried Fish', 'Fried marinated fish with vegetables', 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.my-easy-cooking.com%2Fwp-content%2Fuploads%2F2009%2F05%2FSweetandsour-Chicken0001.jpg&f=1',
    [
      new Ingredient('Fish', 1),
      new Ingredient('vegies', 2),
    ]),
  ];
  // get access to the shopping list service ingredients by injecting shopping list service
  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // slice gives the reference copy of the recipe array
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
