import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {AppDispatch, RootState} from '@/redux/store';
import {getRecipe} from '@/redux/actions/recipe/getRecipe';
import {useRouter} from 'next/router';
import {has} from 'lodash';

function useGetEditItem() {
	const dispatch = useDispatch<AppDispatch>();
	const recipeState = useSelector((state: RootState) => state.recipe.getRecipe);
	const {isLoading, data} = recipeState;

	const {query} = useRouter();
	const {id} = query;

	async function getData() {
		dispatch(getRecipe({id: id as string}));
	}

	useEffect(() => {
		if (has(query, 'id')) {
			getData();
		}
	}, [query]);

	return {
		isLoading,
		data,
	};
}

export default useGetEditItem;
