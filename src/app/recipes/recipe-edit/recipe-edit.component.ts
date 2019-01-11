import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number; // store id property number
  editMode = false; // this property is used to determine the user is adding recipe not in the edit mode
  constructor(private route: ActivatedRoute) { } // first inject activatedRoute in order to get the route id from appRouting module

  ngOnInit() {
// initialize the route to retrieve the id from route
    this.route.params.subscribe((params: Params) => { // to get the id dynamically ise params observable and subscribe to the params
      this.id = +params['id']; // use id property from top and get dynamic param id which is string that use + to convert into number
      this.editMode = params['id'] != null; // checking which mode is the user in it
    });
  }

}
