import {createTheme} from '@mui/material';
import {Montserrat} from 'next/font/google';

const montserrat = Montserrat({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
});

export const theme = createTheme({
	typography: {
		fontFamily: montserrat.style.fontFamily,
	},

	palette: {
		mode: 'light',
		background: {
			default: '#ffffff',
			paper: '#ffffff',
		},
		// hue of blue as per design
		primary: {
			main: '#5469B4',
			light: '#7992ed',
			dark: '#344991',
			contrastText: '#fff',
		},
		// delete color
		error: {
			main: '#b52847',
			light: '#f54269',
			dark: '#961532',
			contrastText: '#fff',
		},
		// warning, orangish
		warning: {
			main: '#b85e32',
			light: '#ed8653',
			dark: '#964015',
			contrastText: '#fff',
		},
	},
});
