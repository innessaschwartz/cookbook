import * as express from 'express';

import * as recipeCtrl from '../ctrls/recipeCtrl';

export const router = express.Router();

router.post('/', (req,res) => {
	return recipeCtrl.saveRecipe(req.body).then(r => res.json(r), err => res.status(400).json(err.stack || err));
});

router.post('/search', (req,res) => {
	return recipeCtrl.searchRecipes(req.body).then(r => res.json(r), err => res.status(400).json(err.stack || err));
});

router.get('/:id', (req,res) => {
	return recipeCtrl.getRecipe(req.params.id).then(r => res.json(r), err => res.status(400).json(err.stack || err));
});
