import styles from '@/styles/Home.module.css';

import {useEffect} from 'react';
import {Montserrat} from 'next/font/google';

import Landing from '@/modules/landing/Landing';
import {useAlert} from '@/modules/app/AlertProvider';

const montserrat = Montserrat({subsets: ['latin']});

export default function Home() {
	const {alertBySuccess} = useAlert();

	useEffect(() => {
		alertBySuccess('testing notif');
	}, []);

	return (
		<main className={`${styles.main} ${montserrat.className}`}>
			<Landing />
		</main>
	);
}
