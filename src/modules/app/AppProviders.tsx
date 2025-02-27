import React from 'react';

interface Props {
	children: React.ReactNode;
}

function AppProviders(props: Props) {
	const {children} = props;
	// add mui provider and notistack for notification system
	return <div>{children}</div>;
}

export default AppProviders;
