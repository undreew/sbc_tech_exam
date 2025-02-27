import {object, string} from 'yup';
import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import {FEEDBACK} from '@/constants/validation';

export interface IFormFields {
	your_name: string;
	email: string;
	title: string;
	description: string;
	ingredients: string;
	instructions: string;
}

function useCreate() {
	const validationSchema = object({
		your_name: string().required(FEEDBACK.REQUIRED),
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

	return useForm<IFormFields>({
		resolver: yupResolver(validationSchema),
	});
}

export default useCreate;
