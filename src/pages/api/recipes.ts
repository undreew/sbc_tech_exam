import {NextApiRequest, NextApiResponse} from 'next';

import {getRecipes} from './routes/getRecipes';
import {postRecipes} from './routes/postRecipes';

// must be false to support formData, disables body parsing for json
export const config = {api: {bodyParser: false}};

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

		default:
			break;
	}
}
