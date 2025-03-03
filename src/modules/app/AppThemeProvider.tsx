import React from 'react';
import {theme} from '@/styles/theme';
import {CssBaseline} from '@mui/material';
import {ThemeProvider} from '@emotion/react';

interface Props {
	children: Children;
}

function AppThemeProvider(props: Props) {
	const {children} = props;

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}

export default AppThemeProvider;
