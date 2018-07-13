import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../services/api.service';

import { Recipe } from '../models';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
	recipe:Recipe;
	constructor(private api:ApiService, private router:Router, private route:ActivatedRoute) {
		var recipeId = this.route.snapshot.paramMap.get('recipeId');
		console.log('recipeId: %o', recipeId);
		if(recipeId==='new') {
			console.log('new recipe');
			this.recipe = <Recipe>{};
		}
		else {
			this.api.getRecipe(recipeId).then(recipe => {
				this.recipe = recipe;
			});
		}
	}

	save() {
		this.api.saveRecipe(this.recipe);
	}

}