import {store} from '@/redux/store';
import React from 'react';
import {Provider} from 'react-redux';

interface Props {
	children: Children;
}

function ReduxProvider(props: Props) {
	const {children} = props;
	return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
