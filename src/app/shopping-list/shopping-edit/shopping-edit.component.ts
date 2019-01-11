import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list-service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm; // get access to the form reference in html and assign to the type ngform
  subscription: Subscription;
  editMode = false; // default value starts with false
  editedItemIndex: number; // store the index of the item that is being edited
  editedItem: Ingredient; // store the type Ingredient that is returned from the getIngredient
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
    .subscribe((index: number) => { // recieves index as a number
      this.editedItemIndex = index; // initialize the editeditem index
      this.editMode = true; // start edit mode from which the index number is recieved, triggers in the html too
      this.editedItem = this.shoppingListService.getIngredient(index); // use the property to save single ingredient
      this.shoppingListForm.setValue(
      {
        name: this.editedItem.name,
        amount: this.editedItem.amount
      }
      ); // get the form and set the new value from the user input
    }); // subcribing the emit from subject
  }

  onSubmit(form: NgForm ) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false; // switch back to the default value of editmode
    form.reset();
  }
  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false; // make sure that the edit mode is reset
  }
  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

