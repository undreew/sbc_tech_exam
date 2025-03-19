import React, {Fragment} from 'react';

import {FormsField} from '@/components/forms';
import {InputRecipe} from '@/components/input';
import {CardContent, Divider} from '@mui/material';

interface Props {
	isLoading: boolean;
}

const CreateFormsRecipeContent: React.FC<Props> = (props) => {
	const {isLoading} = props;
	return (
		<Fragment>
			<CardContent>
				<FormsField
					title='Ingredients'
					helperText='What is the title of your recipe?'
				>
					<InputRecipe
						name='ingredients'
						disabled={isLoading}
						placeholder='Ingredients'
						minRows={5}
						maxRows={5}
						multiline
					/>
				</FormsField>
			</CardContent>
			<Divider />

			<CardContent>
				<FormsField
					title='Instructions'
					helperText='Give a brief description about your recipe.'
				>
					<InputRecipe
						name='instructions'
						disabled={isLoading}
						placeholder='Instructions'
						minRows={5}
						maxRows={5}
						multiline
					/>
				</FormsField>
			</CardContent>
		</Fragment>
	);
};

export default CreateFormsRecipeContent;
