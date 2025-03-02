import {useParams} from 'next/navigation';
import React from 'react';

function Index() {
	const params = useParams();
	console.log(params);

	return <div>Recipe Item</div>;
}

export default Index;
