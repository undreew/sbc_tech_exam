import {NextApiRequest, NextApiResponse} from 'next';
import {getRecipesController} from '../controllers/getRecipes';

export const getRecipes = async (req: NextApiRequest, res: NextApiResponse) => {
	// improvement handle filtering and querying here, and not in the getRecipes
	// const {order, order_by, filter_by_favorites} = req.query;
	try {
		// dito traditional api endpoints
		const recipes = await getRecipesController();
		// res.status(500).json({message: 'MAY ERROR BONAK'});
		// throw new Error('hahaha');
		res.status(200).json(recipes);
	} catch (error) {
		// cannot simulate this one kasi it's not a real api
		res.status(500).json({message: 'Error fetching data'});
	}
};
