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
	const {
		title,
		description,
		name,
		date_added,
		image,
		id,
		favorites,
		ingredients,
		instructions,
		email_address,
	} = req.body;

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
			name,
			favorites,
			description,
			ingredients,
			instructions,
			date_added,
			email_address,
		};

		recipes.push(payload);
		const updatedRecipes = JSON.stringify(recipes);
		await fsPromises.writeFile(recipesPath, updatedRecipes);

		res.status(201).json({data: payload});
	} catch (error) {
		res.status(500).json({message: 'Error storing data'});
	}
};
