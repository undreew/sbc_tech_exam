import {NextApiRequest, NextApiResponse} from 'next';
import {putRecipes} from './routes/putRecipes';

export const config = {api: {bodyParser: false}}; // later

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await new Promise((resolve) => setTimeout(resolve, 1500));

	await putRecipes(req, res);
}
