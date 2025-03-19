import React, {Fragment} from 'react';

import {FormsField} from '@/components/forms';
import {InputRecipe} from '@/components/input';
import {CardContent, Divider} from '@mui/material';

interface Props {
	isEdit?: boolean;
	isLoading: boolean;
}

const CreateFormsRecipeDetails: React.FC<Props> = (props) => {
	const {isEdit = false, isLoading} = props;
	return (
		<Fragment>
			<CardContent>
				<FormsField
					title='Title'
					helperText='What is the title of your recipe?'
				>
					<InputRecipe
						name='title'
						placeholder='Title'
						disabled={isLoading}
						inputProps={{readOnly: isEdit}}
					/>
				</FormsField>
			</CardContent>
			<Divider />

			<CardContent>
				<FormsField
					title='Description'
					helperText='Give a brief description about your recipe.'
				>
					<InputRecipe
						name='description'
						disabled={isLoading}
						placeholder='Description'
						minRows={5}
						maxRows={5}
						multiline
					/>
				</FormsField>
			</CardContent>
			<Divider />
		</Fragment>
	);
};

export default CreateFormsRecipeDetails;
