import React from 'react';
import {Checkbox, FormControl, FormControlLabel} from '@mui/material';

import {map} from 'lodash';

interface Props {
	disabled?: boolean;
	options: {[key: string]: string};
	onChange: (filter: string) => void;
	defaultValue: string | string[] | undefined;
}

function FilterCheckbox(props: Props) {
	const {options, defaultValue, onChange, disabled} = props;

	const _options = map(options, (value, key) => ({label: value, value: key}));

	const handleChange = (value: string) => {
		onChange(value);
	};

	return (
		<FormControl>
			{map(_options, (option, index) => {
				const {label, value} = option;
				return (
					<FormControlLabel
						disabled={disabled}
						control={
							<Checkbox
								checked={defaultValue === value}
								onChange={(e) => {
									handleChange(value);
								}}
								inputProps={{}}
							/>
						}
						labelPlacement='end'
						label={label}
						key={index}
					/>
				);
			})}
		</FormControl>
	);
}

export default FilterCheckbox;
