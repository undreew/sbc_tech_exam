import path from 'path';
import {filter, isEqual} from 'lodash';
import fsPromises from 'fs/promises';
import {RecipesItem} from '@/models/recipe';
import {NextApiRequest, NextApiResponse} from 'next';
import {getRecipesController} from '../controllers/getRecipes';

const recipesPath = path.join(process.cwd(), '/public/data/recipes.json');

export const deleteRecipes = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const {id} = req.body;
	console.log(id);

	try {
		const recipes = await getRecipesController();

		const filtered = filter(recipes, (i: RecipesItem) => i.id !== id);

		if (isEqual(recipes, filtered)) {
			return res.status(500).json({
				errors: {
					message: 'Failed deleting item.',
				},
			});
		}

		const updatedRecipes = JSON.stringify(filtered);

		await fsPromises.writeFile(recipesPath, updatedRecipes);

		res.status(200).json({data: true});
	} catch (error) {}
};
