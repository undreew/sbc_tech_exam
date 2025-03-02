export type RecipePayload = {
	name: string;
	email_address: string;
	title: string;
	description: string;
	ingredients: string;
	instructions: string;
	date_added: number;
};

export type RecipesItem = {
	title: string;
	description: string;
	author: string;
	date_created: number; // temp
	image: string;
	id: number | string;
	favorites: boolean;
	//
	ingredients: string;
};

export type Recipes = RecipesItem[];
