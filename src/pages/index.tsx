import styles from '@/styles/Home.module.css';

import {Montserrat} from 'next/font/google';
import Landing from '../modules/landing/Landing';

const montserrat = Montserrat({subsets: ['latin']});

export default function Home() {
	return (
		<main className={`${styles.main} ${montserrat.className}`}>
			<Landing />
		</main>
	);
}
