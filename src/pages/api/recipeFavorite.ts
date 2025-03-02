import {NextApiRequest, NextApiResponse} from 'next';
import {favoriteRecipes} from './routes/favoriteRecipes';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await new Promise((resolve) => setTimeout(resolve, 1500));
	switch (req.method) {
		case 'PUT':
			await favoriteRecipes(req, res);
			break;

		default:
			break;
	}
}
