import Landing from '@/modules/landing/Landing';
import {Button} from '@mui/material';

export default function Home() {
	return (
		<main>
			<Landing />

			<Button color='error' variant='contained'>
				Error
			</Button>
			<Button color='primary' variant='contained'>
				Primary
			</Button>
			<Button color='warning' variant='contained'>
				Warning
			</Button>
		</main>
	);
}
