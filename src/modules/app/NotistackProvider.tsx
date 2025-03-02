import React from 'react';
import {SnackbarProvider} from 'notistack';

import styles from './NotistackProvider.module.css';

interface Props {
	children: React.ReactNode;
}

function NotistackProvider(props: Props) {
	const {children} = props;
	return (
		<SnackbarProvider
			maxSnack={3}
			autoHideDuration={2000}
			classes={{containerRoot: styles['snackbar']}}
			anchorOrigin={{horizontal: 'right', vertical: 'top'}}
		>
			{children}
		</SnackbarProvider>
	);
}

export default NotistackProvider;
