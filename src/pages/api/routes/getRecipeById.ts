import {filter, first} from 'lodash';
import {NextApiRequest, NextApiResponse} from 'next';
import {getRecipesController} from '../controllers/getRecipes';

export const getRecipeById = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const {id} = req.query;

	try {
		let recipes = await getRecipesController();
		const response = filter(recipes, (i) => i.id === id);
		res.setHeader('Cache-Control', 'no-store');
		res.status(200).json(first(response));
	} catch (error) {}
};
