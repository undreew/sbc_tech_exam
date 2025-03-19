import React, {Fragment} from 'react';
import {useFormContext} from 'react-hook-form';

import {RecipePayload} from '@/models/recipe';
import {FormsField} from '@/components/forms';
import {InputRecipe} from '@/components/input';

import {CardContent, Divider} from '@mui/material';

interface Props {
	isLoading: boolean;
}

const CreateFormsUserInfo: React.FC<Props> = (props) => {
	const {isLoading} = props;
	const {register} = useFormContext<RecipePayload>();

	return (
		<Fragment>
			<CardContent>
				<FormsField
					title='Your Name'
					helperText='First Name, Middle Initial, Last Name.'
				>
					<InputRecipe
						name='name'
						placeholder='Your Name'
						disabled={isLoading}
					/>
				</FormsField>
			</CardContent>

			<Divider />

			<CardContent>
				<FormsField
					title='Email Address'
					helperText='Enter an active email address.'
				>
					<InputRecipe
						name='email_address'
						placeholder='Email Address'
						disabled={isLoading}
					/>
				</FormsField>
			</CardContent>

			<Divider />

			<input type='hidden' value={Date.now()} {...register('date_added')} />
		</Fragment>
	);
};

export default CreateFormsUserInfo;
