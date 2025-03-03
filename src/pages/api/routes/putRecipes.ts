import path from 'path';
import fsPromises from 'fs/promises';
import {IncomingForm} from 'formidable';
import {RecipesItem} from '@/models/recipe';
import {NextApiRequest, NextApiResponse} from 'next';
import {first, isArray, mapValues, merge} from 'lodash';
import {getRecipesController} from '../controllers/getRecipes';

const recipesPath = path.join(process.cwd(), '/public/data/recipes.json');
const uploadDir = path.join(process.cwd(), 'public/images');

const normalizeFields = (fields: Record<string, any>) => {
	return mapValues(fields, (value, key) => {
		const fieldValue = isArray(value) ? first(value) : value;

		if (key === 'date_added') {
			return Number(fieldValue);
		}
		if (key === 'favorites') {
			return false;
		}

		return fieldValue;
	});
};

export const putRecipes = async (req: NextApiRequest, res: NextApiResponse) => {
	// const {title, id} = req.body;
	const recipes = await getRecipesController();

	try {
		const form = new IncomingForm({
			multiples: false,
			uploadDir,
			keepExtensions: true,
		});

		form.parse(req, async (err, fields, files) => {
			if (err) return res.status(500).json({error: 'Error parsing form'});

			const uploadedFile = Array.isArray(files.image)
				? files.image[0]
				: files.image;

			if (!uploadedFile) {
				return res.status(400).json({error: 'No file uploaded'});
			}

			const newFileName = uploadedFile.newFilename;

			const normalizedFields = normalizeFields(fields);

			const {id, title} = normalizedFields;

			// maybe add a checker that removes the old image and replace it with the uploaded one
			// even if it's from an update action

			const safeTitle = title.replace(/[\/\\:*?"<>|]/g, '').trim();
			const fileExtension = path.extname(
				uploadedFile.originalFilename as string
			);
			const customFileName = `${safeTitle}${fileExtension}`;
			const newFilePath = path.join(uploadDir, customFileName);

			await fsPromises.rename(uploadedFile.filepath, newFilePath);

			const imagePath = `/images/${customFileName}`;

			const recipeUpdate = {
				...normalizedFields,
				image: imagePath,
			};

			const updatedRecipes = recipes.map((recipe: RecipesItem) =>
				recipe.id === id!.toString() ? merge({}, recipe, recipeUpdate) : recipe
			);

			await fsPromises.writeFile(recipesPath, JSON.stringify(updatedRecipes));

			res.status(200).json({data: true});
		});
	} catch (error) {}
};
