export type RecipePayload = {
	name: string;
	email_address: string;
	title: string;
	description: string;
	ingredients: string;
	instructions: string;
	date_added: number;
	id?: string;
	favorites?: boolean;
};

// export type RecipePayloadTest = {
// 	name: string;
// 	email_address: string;
// 	title: string;
// 	description: string;
// 	ingredients: string;
// 	instructions: string;
// };

export type RecipesItem = {
	title: string;
	description: string;
	name: string;
	date_added: number; // temp
	image: string;
	id: string;
	favorites: boolean;
	//
	ingredients: string;
	instructions: string;
	email_address: string;
};

export type Recipes = RecipesItem[];
