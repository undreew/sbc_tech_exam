import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {useRouter} from 'next/router';

import {AppDispatch, RootState} from '@/redux/store';
import {getRecipe} from '@/redux/actions/recipe/getRecipe';

function useGetEditItem() {
	const router = useRouter();
	const dispatch = useDispatch<AppDispatch>();
	const recipeState = useSelector((state: RootState) => state.recipe.getRecipe);
	const {isLoading, data} = recipeState;

	const {id} = router.query;

	async function getData() {
		dispatch(getRecipe({id: id as string}));
	}

	useEffect(() => {
		if (router.isReady) {
			getData();
		}
	}, [router.query]);

	return {
		isLoading,
		data,
	};
}

export default useGetEditItem;
