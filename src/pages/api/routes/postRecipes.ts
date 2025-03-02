import path from 'path';
import {filter} from 'lodash';
import fsPromises from 'fs/promises';
import {FEEDBACK} from '@/constants/validation';
import {NextApiRequest, NextApiResponse} from 'next';
import {getRecipesController} from '../controllers/getRecipes';

const recipesPath = path.join(process.cwd(), '/public/data/recipes.json');

export const postRecipes = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const {title, description, author, date_created, image, id, favorites} =
		req.body;

	try {
		const recipes = await getRecipesController();

		// validation - if title exists, throw error
		if (filter(recipes, {title}).length > 0) {
			return res.status(500).json({message: FEEDBACK.UNIQUE.TITLE});
		}

		const payload = {
			id,
			image,
			title,
			author,
			favorites,
			description,
			date_created,
		};

		recipes.push(payload);
		const updatedRecipes = JSON.stringify(recipes);
		await fsPromises.writeFile(recipesPath, updatedRecipes);

		res.status(201).json({data: payload});
	} catch (error) {
		res.status(500).json({message: 'Error storing data'});
	}
};
