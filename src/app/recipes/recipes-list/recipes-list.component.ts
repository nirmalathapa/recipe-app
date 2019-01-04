import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Shaksuka', 'Poached egg in a tamato sauce', 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.onceuponachef.com%2Fimages%2F2017%2F06%2FShakshuka_-2.jpg&f=1'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Fresh Pasta', 'Fresh pasta with cheese and egg', 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2016%2F01%2Fmain%2F1601p25-skillet-chicken-roasted-potatoes-carrots.jpg%3Fitok%3DMcbboinY&f=1'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Fried Fish', 'Fried marinated fish with vegetables', 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.my-easy-cooking.com%2Fwp-content%2Fuploads%2F2009%2F05%2FSweetandsour-Chicken0001.jpg&f=1'),

  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>(); // @output to listen from outside
  constructor() {

  }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
