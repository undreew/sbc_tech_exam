import React from 'react';

import AlertProvider from './AlertProvider';
import AppThemeProvider from './AppThemeProvider';
import NotistackProvider from './NotistackProvider';
import ReduxProvider from './ReduxProvider';

interface Props {
	children: Children;
}

function AppProviders(props: Props) {
	const {children} = props;
	// add mui provider and notistack for notification system
	return (
		<ReduxProvider>
			<AppThemeProvider>
				<NotistackProvider>
					<AlertProvider>{children}</AlertProvider>
				</NotistackProvider>
			</AppThemeProvider>
		</ReduxProvider>
	);
}

export default AppProviders;
