import {NextApiRequest, NextApiResponse} from 'next';

import {getRecipeById} from './routes/getRecipeById';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await new Promise((resolve) => setTimeout(resolve, 1500));
	switch (req.method) {
		case 'GET':
			await getRecipeById(req, res);
			break;

		default:
			break;
	}
}
