import React, {SyntheticEvent} from 'react';
import {Autocomplete, TextField} from '@mui/material';

import {find, map} from 'lodash';

type Option = {
	label: string;
	value: string;
};

interface Props {
	options: {[key: string]: string};
	defaultValue: string | string[] | undefined;
	onChange: (newValue: string | null) => void;
}

function FilterSelect(props: Props) {
	const {options, onChange, defaultValue} = props;

	const _options = map(options, (value, key) => ({label: value, value: key}));
	const selectedOption = find(_options, (item) => item.value === defaultValue);

	function handleChange(event: SyntheticEvent, newValue: Option | null) {
		onChange(newValue ? newValue.value : null);
	}

	return (
		<Autocomplete
			loading={false}
			options={_options}
			onChange={handleChange}
			value={selectedOption || null}
			autoHighlight={true}
			renderInput={(params) => (
				<TextField {...params} label='Sort' size='small' margin='normal' />
			)}
		/>
	);
}

export default FilterSelect;
