import path from 'path';
import {find} from 'lodash';
import fsPromises from 'fs/promises';
import {NextApiRequest, NextApiResponse} from 'next';
import {getRecipesController} from '../controllers/getRecipes';

const recipesPath = path.join(process.cwd(), '/public/data/recipes.json');

export const favoriteRecipes = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const {id} = req.body;

	try {
		const recipes = await getRecipesController();
		const recipe = find(recipes, {id});

		recipe.favorites = !recipe.favorites;

		await fsPromises.writeFile(recipesPath, JSON.stringify(recipes));

		res.status(200).json(recipe);
	} catch (error) {}
};
