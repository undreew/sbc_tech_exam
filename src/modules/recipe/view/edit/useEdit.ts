import {useEffect} from 'react';
import {useForm} from 'react-hook-form';

import {number, object, string} from 'yup';

import {RecipePayload, RecipesItem} from '@/models/recipe';
import {FEEDBACK} from '@/constants/validation';
import {yupResolver} from '@hookform/resolvers/yup';

function useEdit(data: RecipesItem) {
	const {
		name,
		email_address,
		title,
		description,
		ingredients,
		instructions,
		date_added,
	} = data;

	const validationSchema = object({
		name: string().min(10).max(50).required(FEEDBACK.REQUIRED),
		email_address: string().email(FEEDBACK.REQUIRED).required(FEEDBACK.EMAIL),
		title: string().required(FEEDBACK.REQUIRED),
		description: string().required(FEEDBACK.REQUIRED),
		ingredients: string().required(FEEDBACK.REQUIRED),
		instructions: string().required(FEEDBACK.REQUIRED),
		date_added: number().required(),
	});

	function onSubmit(formData: RecipePayload) {
		console.log(formData);
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
		}
	}, [data, formValues.setValue]);

	return {
		// isSubmitting: isLoading,
		onSubmit,
		// formValues: useForm<RecipePayload>({
		formValues,
	};
}

export default useEdit;
