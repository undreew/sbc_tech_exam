import React from 'react';
import AppThemeProvider from './AppThemeProvider';

interface Props {
	children: React.ReactNode;
}

function AppProviders(props: Props) {
	const {children} = props;
	// add mui provider and notistack for notification system
	return <AppThemeProvider>{children}</AppThemeProvider>;
}

export default AppProviders;
