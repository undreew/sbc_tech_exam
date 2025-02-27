import React from 'react';
import {theme} from '@/styles/theme';
import {ThemeProvider} from '@emotion/react';

interface Props {
	children: React.ReactNode;
}

function AppThemeProvider(props: Props) {
	const {children} = props;

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
