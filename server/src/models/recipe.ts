import * as mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

export interface RecipeObject {
	_id: any,
	name: string,
	type: string,
	time: string,
	description: string,
	imgs: string,
	comments: string,
	favorite: boolean
};

const schema = new mongoose.Schema({
	name: String,
	type: String,
	time: String,
	description: String,
	imgs: String,
	comments: String,
	favorite: Boolean
}, {
	minimize: false,
	toJSON:   {virtuals:true},
	toObject: {virtuals:true}
});

schema.set('timestamps', {
	createdAt: 'createDate',
	updatedAt: 'updateDate'
});

export interface RecipeDocument extends RecipeObject, mongoose.Document {};
export const RecipeModel:mongoose.Model<RecipeDocument> = mongoose.model<RecipeDocument>('Recipe', schema);
