import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';

import {number, object, string} from 'yup';

import {RecipePayload} from '@/models/recipe';
import {FEEDBACK} from '@/constants/validation';
import {yupResolver} from '@hookform/resolvers/yup';

function useEdit() {
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

	return {
		onSubmit,
		formValues: useForm<RecipePayload>({
			resolver: yupResolver(validationSchema),
		}),
	};
}

export default useEdit;
