import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../services/api.service';

import { Recipe } from '../models';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
	recipes:Recipe[];
	constructor(private api:ApiService, private router:Router) {
		this.api.searchRecipes({}).then((recipes:any) => {
			this.recipes = recipes;
		});
	}

	addRecipe() {
		return this.router.navigate(['my-recipes/','new']);
	}

}
