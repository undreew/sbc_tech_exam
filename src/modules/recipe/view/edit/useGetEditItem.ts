import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {AppDispatch} from '@/redux/store';
import {useAlert} from '@/modules/app/AlertProvider';

function useGetEditItem() {
	const {alertByError} = useAlert();
	const dispatch = useDispatch<AppDispatch>();

	async function getData() {
		// dispatch();
	}

	useEffect(() => {
		getData();
	}, []);

	return {};
}

export default useGetEditItem;
