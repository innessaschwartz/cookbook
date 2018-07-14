import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../services/api.service';

import { Recipe } from '../models';

@Component({
	selector: 'app-favorite-list',
	templateUrl: './favorite-list.component.html',
	styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent {
	recipes:Recipe[];
	constructor(private api:ApiService, private router:Router) {
		this.api.searchRecipes({favorite:true}).then((recipes:any) => {
			this.recipes = recipes;
		});
	}
}
