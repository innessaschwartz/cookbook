import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Recipe } from '../models';

@Injectable()
export class ApiService {

	constructor(private http:HttpClient) {}

	searchRecipes(params) {
		return <Promise<Recipe>>this.http.post(`/api/recipe/search`, params).toPromise();
	}

	getRecipe(id) {
		return <Promise<Recipe>>this.http.get(`/api/recipe/${id}`).toPromise();
	}

	saveRecipe(recipe) {
		return <Promise<Recipe>>this.http.post(`/api/recipe/`, recipe).toPromise();

	}
}
