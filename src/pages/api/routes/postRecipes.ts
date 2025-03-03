import path from 'path';
import {filter, first, isArray, mapValues} from 'lodash';
import fsPromises from 'fs/promises';
import {NextApiRequest, NextApiResponse} from 'next';
import {getRecipesController} from '../controllers/getRecipes';
import fs from 'fs';
import {v4 as uuidv4} from 'uuid';
import {IncomingForm} from 'formidable';

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

// paths
const recipesPath = path.join(process.cwd(), '/public/data/recipes.json');
const uploadDir = path.join(process.cwd(), 'public/images');

export const postRecipes = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	try {
		const recipes = await getRecipesController();

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

			const normalizedFields = normalizeFields(fields);
			const {title} = normalizedFields;

			if (filter(recipes, {title}).length > 0) {
				return res.status(500).json({message: 'Title already exists'});
			}

			const safeTitle = title.replace(/[\/\\:*?"<>|]/g, '').trim();
			const fileExtension = path.extname(
				uploadedFile.originalFilename as string
			);
			const customFileName = `${safeTitle}${fileExtension}`;
			const newFilePath = path.join(uploadDir, customFileName);

			await fsPromises.rename(uploadedFile.filepath, newFilePath);

			const recipePayload = {
				...normalizedFields,
				image: `/images/${customFileName}`,
			};

			const payload = {
				...recipePayload,
				id: uuidv4(),
			};

			recipes.push(payload);
			const updatedRecipes = JSON.stringify(recipes);
			await fsPromises.writeFile(recipesPath, updatedRecipes);

			res.status(201).json({data: payload});
		});

		// res.status(200).json({data: 'WIP'});
	} catch (error) {
		console.log(error);
	}
};
