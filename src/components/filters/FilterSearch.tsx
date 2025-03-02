import React from 'react';
import {Search} from '@mui/icons-material';
import {InputAdornment, TextField} from '@mui/material';

function FilterSearch() {
	return (
		<TextField
			size='small'
			color='info'
			variant='outlined'
			placeholder='Search here'
			InputProps={{
				startAdornment: (
					<InputAdornment position='start'>
						<Search fontSize='small' color='action' />
					</InputAdornment>
				),
			}}
		/>
	);
}

export default FilterSearch;
