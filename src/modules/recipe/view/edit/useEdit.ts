import {useEffect} from 'react';
import {useForm} from 'react-hook-form';

import {number, object, string} from 'yup';

import {RecipePayload, RecipesItem} from '@/models/recipe';
import {FEEDBACK} from '@/constants/validation';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@/redux/store';
import {editRecipe} from '@/redux/actions/recipe/editRecipe';
import {useAlert} from '@/modules/app/AlertProvider';

function useEdit(data: RecipesItem) {
	const {
		name,
		title,
		date_added,
		description,
		ingredients,
		instructions,
		email_address,
		id,
	} = data;

	const {alertBySuccess, alertByError} = useAlert();

	const dispatch = useDispatch<AppDispatch>();
	const editState = useSelector((state: RootState) => state.recipe.editRecipe);
	const {isLoading, success, error} = editState;

	const validationSchema = object({
		name: string().min(10).max(50).required(FEEDBACK.REQUIRED),
		email_address: string().email(FEEDBACK.REQUIRED).required(FEEDBACK.EMAIL),
		title: string().required(FEEDBACK.REQUIRED),
		description: string().required(FEEDBACK.REQUIRED),
		ingredients: string().required(FEEDBACK.REQUIRED),
		instructions: string().required(FEEDBACK.REQUIRED),
		date_added: number().required(),
		id: string(),
	});

	function onSubmit(formData: RecipePayload) {
		dispatch(editRecipe(formData));
	}

	const formValues = useForm<RecipePayload>({
		resolver: yupResolver(validationSchema),
	});

	useEffect(() => {
		if (data) {
			formValues.setValue('name', name);
			formValues.setValue('email_address', email_address);
			formValues.setValue('title', title);
			formValues.setValue('description', description);
			formValues.setValue('ingredients', ingredients);
			formValues.setValue('instructions', instructions);
			formValues.setValue('date_added', date_added);
			formValues.setValue('id', id);
		}
	}, [data, formValues.setValue]);

	useEffect(() => {
		if (!!error) {
			return alertByError(error);
		}
		if (!!success) {
			return alertBySuccess('Successfully updated a recipe');
		}
	}, [error, success]);

	return {
		formValues,
		isLoading,
		onSubmit,
	};
}

export default useEdit;
