import React from 'react';
import Grid from '@mui/material/Grid';
import {drop, first, last} from 'lodash';

interface Props {
	children: Children | Children[];
}

function PageContent(props: Props) {
	const {children} = props;

	const childrenArray = React.Children.toArray(children);
	const firstChild = first(childrenArray);
	const lastChild =
		drop(childrenArray, 1).length > 0 ? last(childrenArray) : null;

	return (
		<Grid container spacing={3}>
			<Grid item xs={12} sm={12} md={4}>
				{firstChild}
			</Grid>
			{lastChild && (
				<Grid item xs={12} sm={12} md={8}>
					{lastChild}
				</Grid>
			)}
		</Grid>
	);
}

export default PageContent;
