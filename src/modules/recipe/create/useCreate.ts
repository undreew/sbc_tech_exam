import {object, string} from 'yup';
import {useForm} from 'react-hook-form';

import {RecipeCreate} from '@/models/recipe';
import {FEEDBACK} from '@/constants/validation';
import {yupResolver} from '@hookform/resolvers/yup';

function useCreate() {
	const validationSchema = object({
		your_name: string().min(10).max(50).required(FEEDBACK.REQUIRED),
		email: string()
			.email(FEEDBACK.REQUIRED)
			.required(FEEDBACK.EMAIL)
			// https://github.com/jquense/yup/issues/2165
			.matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
		title: string().required(FEEDBACK.REQUIRED),
		description: string().required(FEEDBACK.REQUIRED),
		ingredients: string().required(FEEDBACK.REQUIRED),
		instructions: string().required(FEEDBACK.REQUIRED),
	});

	return useForm<RecipeCreate>({
		resolver: yupResolver(validationSchema),
	});
}

export default useCreate;
