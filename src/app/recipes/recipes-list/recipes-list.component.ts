import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private router: Router, // to get the path of the route
    private activeRoute: ActivatedRoute // to activate relative route
    ) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  // the click event triggers onAddRecipe which uses route to navigate to the new recipe path
  onAddNewRecipe() {
    console.log(this.router.navigate(['new'], {relativeTo: this.activeRoute}));
    this.router.navigate(['new'], {relativeTo: this.activeRoute}); // use JS object to point relative route
  }
}
