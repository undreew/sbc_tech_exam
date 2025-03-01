import React, {Fragment} from 'react';
import {Card, CardContent, Divider, Stack} from '@mui/material';

interface Props {
	children: React.ReactNode;
	title?: React.ReactNode | string;
	actions?: React.ReactElement | boolean;
}

function PageCard(props: Props) {
	const {children, title, actions} = props;
	return (
		<Card variant='outlined'>
			{title && (
				<Fragment>
					<CardContent
						component={Stack}
						direction='row'
						alignItems='center'
						justifyContent='space-between'
					>
						{title}
						{actions}
					</CardContent>
					<Divider />
				</Fragment>
			)}
			{children}
		</Card>
	);
}

export default PageCard;
