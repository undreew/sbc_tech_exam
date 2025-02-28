import React from 'react';
import {
	Box,
	Button,
	Card,
	CardContent,
	FormLabel,
	Grid,
	Stack,
	TextField,
} from '@mui/material';

import {RecipeCreate} from '@/models/recipe';
import useCreate from '@/modules/recipe/create/useCreate';

function PageForm({onSubmit}: {onSubmit: (data: RecipeCreate) => void}) {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useCreate();

	return (
		<Box noValidate component='form' onSubmit={handleSubmit(onSubmit)}>
			<Grid container spacing={3}>
				<Grid item sm={4} md={4}>
					<Card>
						<CardContent>Image</CardContent>
					</Card>
				</Grid>

				<Grid item sm={8} md={8} alignContent='center'>
					<Card>
						<CardContent>
							{/* form labels */}
							<TextField
								size='small'
								label='Your Name'
								type='text'
								fullWidth
								margin='normal'
								{...register('your_name')}
								error={!!errors.your_name}
								helperText={errors.your_name?.message}
							/>

							<TextField
								size='small'
								label='Email'
								type='email'
								fullWidth
								margin='normal'
								{...register('email')}
								error={!!errors.email}
								helperText={errors.email?.message}
							/>

							<TextField
								size='small'
								label='Title'
								type='text'
								fullWidth
								margin='normal'
								{...register('title')}
								error={!!errors.title}
								helperText={errors.title?.message}
							/>

							<TextField
								size='small'
								id='description'
								type='text'
								margin='normal'
								label='Description'
								placeholder='Description here'
								{...register('description')}
								error={!!errors.description}
								helperText={errors.description?.message}
								minRows={5}
								multiline
								fullWidth
							/>

							<TextField
								size='small'
								type='text'
								margin='normal'
								label='Ingredients'
								placeholder='Ingredients here'
								{...register('ingredients')}
								error={!!errors.ingredients}
								helperText={errors.ingredients?.message}
								minRows={5}
								multiline
								fullWidth
							/>

							<TextField
								size='small'
								type='text'
								margin='normal'
								label='Instructions'
								placeholder='Instructions here'
								{...register('instructions')}
								error={!!errors.instructions}
								helperText={errors.instructions?.message}
								minRows={5}
								multiline
								fullWidth
							/>
						</CardContent>
					</Card>
				</Grid>
			</Grid>

			<Box sx={{display: 'flex', justifyContent: 'end', mt: 2}}>
				<Button type='submit' variant='contained' size='large'>
					Save
				</Button>
			</Box>
		</Box>
	);
}

export default PageForm;
