import * as mongoose from 'mongoose';
import { RecipeObject, RecipeModel, RecipeDocument } from '../models/recipe';

export function saveRecipe(recipe):Promise<RecipeObject> {
	if(!recipe._id) {
		recipe._id =  new mongoose.mongo.ObjectID();
	}
	return <Promise<RecipeObject>>RecipeModel.findByIdAndUpdate(recipe._id, recipe, {upsert:true, new:true}).exec();
}

export function searchRecipes(searchParams):Promise<RecipeObject[]> {
	return <Promise<RecipeObject[]>>RecipeModel.find({}).exec();
}

export function getRecipe(id):Promise<RecipeObject> {
	return <Promise<RecipeObject>>RecipeModel.findById(id).exec();
}
