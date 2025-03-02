import {orderBy} from 'lodash';
import {RecipesItem} from '@/models/recipe';
import {NextApiRequest, NextApiResponse} from 'next';
import {getRecipesController} from '../controllers/getRecipes';

export const getRecipes = async (req: NextApiRequest, res: NextApiResponse) => {
	const {order, order_by, filter_by_favorites} = req.query;
	let isFavorite = filter_by_favorites === 'yes' ? true : false;

	try {
		let recipes = await getRecipesController();

		if (order && order_by) {
			recipes = orderBy(recipes, [order_by], [order as 'asc' | 'desc']);
		}

		if (filter_by_favorites) {
			recipes = recipes.filter((i: RecipesItem) => i.favorites === isFavorite);
		}

		await new Promise((resolve) => setTimeout(resolve, 1500));

		res.status(200).json(recipes);
	} catch (error) {}
};
