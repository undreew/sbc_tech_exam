import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';

import {Cancel, CheckCircle} from '@mui/icons-material';
import {Box, TextField, TextFieldProps} from '@mui/material';

interface FormInputProps {
	isValid?: boolean;
	isInvalid?: boolean;
	register: UseFormRegisterReturn;
}

const FormInput: React.FC<TextFieldProps & FormInputProps> = (props) => {
	const {register, isValid, isInvalid, ...rest} = props;
	return (
		<TextField
			error={isInvalid}
			focused={isValid}
			InputProps={{
				color: isInvalid ? 'error' : isValid ? 'success' : 'primary',
				endAdornment: (
					<Box ml={2} display='flex' alignItems='center'>
						{isInvalid ? (
							<Cancel color='error' />
						) : (
							isValid && <CheckCircle color='success' />
						)}
					</Box>
				),
			}}
			type='text'
			size='small'
			margin='normal'
			required
			fullWidth
			{...rest}
			{...register}
		/>
	);
};

export default FormInput;
