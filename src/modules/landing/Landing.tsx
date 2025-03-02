import React from 'react';
import {some} from 'lodash';

import {PageContainer, PageContent} from '@/components/page';

import LandingList from './LandingList';
import LandingActions from './LandingActions';
import LandingFilters from './LandingFilters';

import useGetRecipes from './useGetRecipes';
import useFavoriteRecipes from './useFavoriteRecipes';

const HomePage: React.FC = () => {
	const getRecipesProps = useGetRecipes();
	const favoriteRecipeProps = useFavoriteRecipes(getRecipesProps.getData);

	const isListLoading = some([
		getRecipesProps.isLoading,
		favoriteRecipeProps.isLoading,
	]);

	return (
		<PageContainer>
			<LandingActions isLoading={isListLoading} />

			<PageContent>
				<LandingFilters isLoading={isListLoading} />
				<LandingList
					{...getRecipesProps}
					actions={{
						onFavorite: (id: string) => favoriteRecipeProps.onSubmit(id),
					}}
				/>
			</PageContent>
		</PageContainer>
	);
};

export default HomePage;
