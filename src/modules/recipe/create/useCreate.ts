import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {number, object, string} from 'yup';

import {get} from 'lodash';

import {RootState} from '@/redux/store';
import {RecipeCreate} from '@/models/recipe';
import {FEEDBACK} from '@/constants/validation';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAlert} from '@/modules/app/AlertProvider';

function useCreate() {
	const {alertBySuccess, alertByError} = useAlert();
	const recipeState = useSelector((state: RootState) => state.recipe);
	const {isLoading, success, error} = get(recipeState, 'createRecipes');

	const validationSchema = object({
		name: string().min(10).max(50).required(FEEDBACK.REQUIRED),
		email_address: string()
			.email(FEEDBACK.REQUIRED)
			.required(FEEDBACK.EMAIL)
			// https://github.com/jquense/yup/issues/2165
			.matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
		title: string().required(FEEDBACK.REQUIRED),
		description: string().required(FEEDBACK.REQUIRED),
		ingredients: string().required(FEEDBACK.REQUIRED),
		instructions: string().required(FEEDBACK.REQUIRED),
		date_added: number().required(),
	});

	useEffect(() => {
		if (!!error) {
			return alertByError(error);
		}
		if (!!success) {
			return alertBySuccess('Successfully created a recipe');
		}
	}, [error, success]);

	return {
		isLoading,
		formValues: useForm<RecipeCreate>({
			resolver: yupResolver(validationSchema),
		}),
	};
}

export default useCreate;
