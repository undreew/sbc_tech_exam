import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {useDispatch, useSelector} from 'react-redux';

import cleanDeep from 'clean-deep';

import {AppDispatch, RootState} from '@/redux/store';
import {getRecipes} from '@/redux/actions/recipe/getRecipes';

import {useAlert} from '../app/AlertProvider';

function useGetRecipes() {
	const {alertByError} = useAlert();

	const router = useRouter();

	const {query} = router;
	const {order, order_by, filter_by_favorites} = query;
	const queries = cleanDeep({
		order: order as string,
		order_by: order_by as string,
		filter_by_favorites: filter_by_favorites as string,
	});

	const dispatch = useDispatch<AppDispatch>();
	const recipeState = useSelector((state: RootState) => state.recipe);
	const {isLoading, data} = recipeState;

	async function getData() {
		try {
			dispatch(getRecipes(queries));
		} catch (error) {
			alertByError(error as string); // temp
		}
	}

	useEffect(() => {
		getData();
	}, [query]);

	return {
		isLoading,
		data,
	};
}

export default useGetRecipes;
