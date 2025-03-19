import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';

import {mixed, number, object, string} from 'yup';

import {RecipePayload} from '@/models/recipe';
import {FEEDBACK} from '@/constants/validation';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAlert} from '@/modules/app/AlertProvider';

import {
	resetGetRecipesState,
	resetCreateRecipesState,
} from '@/redux/features/recipe';
import {AppDispatch, RootState} from '@/redux/store';
import {createRecipe} from '@/redux/actions/recipe/createRecipes';

function useCreate() {
	const {alertBySuccess, alertByError} = useAlert();

	const dispatch = useDispatch<AppDispatch>();
	const recipeState = useSelector(
		(state: RootState) => state.recipe.createRecipes
	);
	const {isLoading, success, error} = recipeState;

	async function onSubmit(data: RecipePayload) {
		await dispatch(createRecipe(data));
	}

	const validationSchema = object({
		name: string()
			.required(FEEDBACK.REQUIRED)
			.min(10, FEEDBACK.MIN)
			.max(50, FEEDBACK.MAX),
		email_address: string()
			.required(FEEDBACK.REQUIRED)
			.email(FEEDBACK.EMAIL)
			// https://github.com/jquense/yup/issues/2165
			.matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
		title: string().required(FEEDBACK.REQUIRED),
		description: string().required(FEEDBACK.REQUIRED),
		ingredients: string().required(FEEDBACK.REQUIRED),
		instructions: string().required(FEEDBACK.REQUIRED),
		date_added: number().required(),
		image: mixed(),
	});

	const formValues = useForm<RecipePayload>({
		resolver: yupResolver(validationSchema),
	});

	useEffect(() => {
		dispatch(resetGetRecipesState());
		dispatch(resetCreateRecipesState());
	}, []);

	useEffect(() => {
		if (!!error) return alertByError(error);

		if (!!success) {
			formValues.reset();
			return alertBySuccess('Successfully created a recipe');
		}
		// add reset of state here with router as dependency
	}, [error, success]);

	return {
		isLoading,
		onSubmit,
		formValues,
	};
}

export default useCreate;
