import React from 'react';

import AlertProvider from './AlertProvider';
import AppThemeProvider from './AppThemeProvider';
import NotistackProvider from './NotistackProvider';

interface Props {
	children: React.ReactNode;
}

function AppProviders(props: Props) {
	const {children} = props;
	// add mui provider and notistack for notification system
	return (
		<AppThemeProvider>
			<NotistackProvider>
				<AlertProvider>{children}</AlertProvider>
			</NotistackProvider>
		</AppThemeProvider>
	);
}

export default AppProviders;
