import React from 'react';
import {useFormContext} from 'react-hook-form';

import {FormInput} from '../forms';

import {TextFieldProps} from '@mui/material';
import {RecipePayload} from '@/models/recipe';
import {FEEDBACK} from '@/constants/validation';

const InputRecipe: React.FC<TextFieldProps> = (props) => {
	const {name, ...rest} = props;
	const formValues = useFormContext<RecipePayload>();

	const {register, formState} = formValues;
	const {isValid, isSubmitting, errors} = formState;

	const inputName = name as keyof RecipePayload;
	const inputError = errors[inputName];
	const isInputInvalid = Boolean(inputError && !isValid);
	const inputHelperText =
		isInputInvalid && (inputError?.message || FEEDBACK.REQUIRED);

	return (
		<FormInput
			isValid={isValid}
			disabled={isSubmitting}
			isInvalid={isInputInvalid}
			helperText={inputHelperText}
			register={register(inputName)}
			{...rest}
		/>
	);
};

export default InputRecipe;
