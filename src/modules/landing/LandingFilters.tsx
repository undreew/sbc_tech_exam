import React from 'react';
import {
	Card,
	CardContent,
	CardHeader,
	Checkbox,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Select,
	Stack,
} from '@mui/material';

function LandingFilters() {
	return (
		<Stack gap={10}>
			<FormControl fullWidth>
				<InputLabel id='demo-simple-select-helper-label'>Age</InputLabel>
				<Select value={10} label='Age'>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>

			<Card>
				<CardHeader title='Favorites' />
				<CardContent>
					<FormControl>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label='Label'
						/>
					</FormControl>
				</CardContent>
			</Card>
		</Stack>
	);
}

export default LandingFilters;
