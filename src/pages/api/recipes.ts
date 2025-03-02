import {NextApiRequest, NextApiResponse} from 'next';

import {getRecipes} from './routes/getRecipes';
import {putRecipes} from './routes/putRecipes';
import {postRecipes} from './routes/postRecipes';
import {deleteRecipes} from './routes/deleteRecipes';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await new Promise((resolve) => setTimeout(resolve, 1500));
	switch (req.method) {
		case 'GET':
			await getRecipes(req, res);
			break;
		case 'POST':
			await postRecipes(req, res);
			break;
		case 'PUT':
			await putRecipes(req, res);
			break;
		case 'DELETE':
			await deleteRecipes(req, res);
			break;
		default:
			break;
	}
}
