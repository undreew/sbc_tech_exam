import {useParams} from 'next/navigation';
import React from 'react';

function Index() {
	const params = useParams();
	console.log(params);

	// fetch item

	// display item in card

	return <div>Recipe Item</div>;
}

export default Index;
