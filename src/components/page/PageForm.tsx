import React from 'react';
import {Box, Button, FormLabel, Grid, TextField} from '@mui/material';

import useCreate, {IFormFields} from '@/modules/recipe/create/useCreate';

function PageForm({onSubmit}: {onSubmit: (data: IFormFields) => void}) {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useCreate();

	return (
		<Box noValidate component='form' onSubmit={handleSubmit(onSubmit)}>
			<Grid container>
				<Grid item sm={6} md={4}>
					Image
				</Grid>
				<Grid item sm={6} md={8}>
					<TextField
						label='Your Name'
						type='text'
						fullWidth
						margin='normal'
						{...register('your_name')}
						error={!!errors.your_name}
						helperText={errors.your_name?.message}
					/>

					<TextField
						label='Email'
						type='email'
						fullWidth
						margin='normal'
						{...register('email')}
						error={!!errors.email}
						helperText={errors.email?.message}
					/>

					<TextField
						label='Title'
						type='text'
						fullWidth
						margin='normal'
						{...register('title')}
						error={!!errors.title}
						helperText={errors.title?.message}
					/>

					<FormLabel id='description'></FormLabel>
					<TextField
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
