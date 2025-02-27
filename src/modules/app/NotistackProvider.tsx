import React from 'react';
import {SnackbarProvider} from 'notistack';

interface Props {
	children: React.ReactNode;
}

function NotistackProvider(props: Props) {
	const {children} = props;
	return (
		<SnackbarProvider
			maxSnack={3}
			autoHideDuration={2000}
			anchorOrigin={{horizontal: 'right', vertical: 'top'}}
		>
			{children}
		</SnackbarProvider>
	);
}

export default NotistackProvider;
