import {NextApiRequest, NextApiResponse} from 'next';

import {getRecipes} from './routes/getRecipes';
import {postRecipes} from './routes/postRecipes';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	switch (req.method) {
		case 'GET':
			await getRecipes(req, res);
			break;
		case 'POST':
			await postRecipes(req, res);
			break;

		default:
			break;
	}
}
