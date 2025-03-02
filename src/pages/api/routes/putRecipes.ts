import path from 'path';
import {filter} from 'lodash';
import fsPromises from 'fs/promises';
import {RecipesItem} from '@/models/recipe';
import {FEEDBACK} from '@/constants/validation';
import {NextApiRequest, NextApiResponse} from 'next';
import {getRecipesController} from '../controllers/getRecipes';

const recipesPath = path.join(process.cwd(), '/public/data/recipes.json');

export const putRecipes = async (req: NextApiRequest, res: NextApiResponse) => {
	const {title, id} = req.body;

	try {
		const recipes = await getRecipesController();

		const omittedCurrent = filter(recipes, (i: RecipesItem) => i.id !== id);
		// console.log(omittedCurrent);
		if (filter(omittedCurrent, {title}).length > 0) {
			return res.status(500).json({message: FEEDBACK.UNIQUE.TITLE});
		}

		const updatedRecipes = recipes.map((recipe: RecipesItem) =>
			recipe.id === id ? {...recipe, ...req.body} : recipe
		);

		await fsPromises.writeFile(recipesPath, JSON.stringify(updatedRecipes));

		res.status(201).json({data: true});
	} catch (error) {}
};
