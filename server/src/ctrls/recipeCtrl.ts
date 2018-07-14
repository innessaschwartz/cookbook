import * as mongoose from 'mongoose';
import { RecipeObject, RecipeModel, RecipeDocument } from '../models/recipe';

export function saveRecipe(recipe):Promise<RecipeObject> {
	if(!recipe._id) {
		recipe._id =  new mongoose.mongo.ObjectID();
	}
	if(recipe.delete) {
		return RecipeModel.findByIdAndRemove(recipe._id).exec();
	}
	else {
		return <Promise<RecipeObject>>RecipeModel.findByIdAndUpdate(recipe._id, recipe, {upsert:true, new:true}).exec();
	}
}

export function searchRecipes(searchParams):Promise<RecipeObject[]> {
	var params:any = {};
	if(searchParams.favorite) {
		params.favorite = true;
	}
	return <Promise<RecipeObject[]>>RecipeModel.find(params).exec();
}

export function getRecipe(id):Promise<RecipeObject> {
	return <Promise<RecipeObject>>RecipeModel.findById(id).exec();
}
