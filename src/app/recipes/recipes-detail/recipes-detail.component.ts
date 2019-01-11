import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddIngredientToShoppingList() { // click event call on add ingredients function
    // get access to the recipeservice method to the add the ingredients array
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route}); // straight forward just use the edit path
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});  more complex way of navigating path using id with ../
  }

}
