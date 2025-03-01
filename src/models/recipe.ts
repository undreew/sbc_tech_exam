export type RecipeCreate = {
	your_name: string;
	email: string;
	title: string;
	description: string;
	ingredients: string;
	instructions: string;
};

export type RecipesItem = {
	title: string;
	description: string;
	author: string;
	date_created: number;
	image: string;
	id: number | string;
};

export type Recipes = RecipesItem[];
