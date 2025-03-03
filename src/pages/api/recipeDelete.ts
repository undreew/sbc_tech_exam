import {NextApiRequest, NextApiResponse} from 'next';
import {deleteRecipes} from './routes/deleteRecipes';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await new Promise((resolve) => setTimeout(resolve, 1500));
	await deleteRecipes(req, res);
}
