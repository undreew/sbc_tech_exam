import {useForm} from 'react-hook-form';
import {useEffect, useState} from 'react';
import {ImageListType} from 'react-images-uploading';
import {useDispatch, useSelector} from 'react-redux';

import cleanDeep from 'clean-deep';
import {mixed, number, object, string} from 'yup';
import {first, forEach, isEmpty, keys} from 'lodash';

import {imagePathToFile} from '@/utils/images';
import {FEEDBACK} from '@/constants/validation';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAlert} from '@/modules/app/AlertProvider';
import {AppDispatch, RootState} from '@/redux/store';
import {RecipePayload, RecipesItem} from '@/models/recipe';
import {editRecipe} from '@/redux/actions/recipe/editRecipe';

function useEdit(data: RecipesItem) {
	const [image, setImage] = useState<ImageListType>([]);
	const {alertBySuccess, alertByError} = useAlert();

	const dispatch = useDispatch<AppDispatch>();
	const editState = useSelector((state: RootState) => state.recipe.editRecipe);
	const {isLoading, success, error} = editState;

	const validationSchema = object({
		name: string().min(10).max(50).required(FEEDBACK.REQUIRED),
		email_address: string().email(FEEDBACK.REQUIRED).required(FEEDBACK.EMAIL),
		title: string().required(FEEDBACK.REQUIRED),
		description: string().required(FEEDBACK.REQUIRED),
		ingredients: string().required(FEEDBACK.REQUIRED),
		instructions: string().required(FEEDBACK.REQUIRED),
		date_added: number().required(),
		id: string(),
		image: mixed(),
	});

	function onSubmit(formData: RecipePayload) {
		dispatch(editRecipe(formData));
	}

	const formValues = useForm<RecipePayload>({
		resolver: yupResolver(validationSchema),
	});

	useEffect(() => {
		if (!isEmpty(cleanDeep(data))) {
			forEach(keys(data), (key) => {
				const dataKey = key as keyof RecipesItem;
				const keyValue = data[dataKey];
				formValues.setValue(dataKey, keyValue);
			});
			imagePathToFile(data.image).then((data) => {
				const _data = data as ImageListType;
				const image = first(_data);
				if (image) {
					setImage(data as ImageListType);
					formValues.setValue('image', image.file);
				}
			});
		}
	}, [data]);

	useEffect(() => {
		if (!!error) {
			return alertByError(error);
		}
		if (!!success) {
			return alertBySuccess('Successfully updated a recipe');
		}
	}, [error, success]);

	return {
		formValues,
		isLoading,
		onSubmit,
		image,
	};
}

export default useEdit;
