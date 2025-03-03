import path from 'path';
import fsPromises from 'fs/promises';

const recipesPath = path.join(process.cwd(), '/public/data/recipes.json');

export const getRecipesController = async () => {
	const data = await fsPromises.readFile(recipesPath, 'utf8');
	return JSON.parse(data);
};
