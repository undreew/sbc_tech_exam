import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';

import {mixed, number, object, string} from 'yup';

import {RecipePayload, RecipesItem} from '@/models/recipe';
import {FEEDBACK} from '@/constants/validation';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@/redux/store';
import {editRecipe} from '@/redux/actions/recipe/editRecipe';
import {useAlert} from '@/modules/app/AlertProvider';
import {first, isEmpty, map, slice} from 'lodash';
import {ImageListType} from 'react-images-uploading';

function useEdit(data: RecipesItem) {
	const {
		name,
		title,
		date_added,
		description,
		ingredients,
		instructions,
		email_address,
		id,
	} = data;
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
		// console.log(formData);
	}

	async function setDefaultImage(
		imagePath: string,
		folder: string = '/images/'
	) {
		const imgArr = map(imagePath);
		const fileName = slice(imgArr, folder.length, imgArr.length)
			.join('')
			.toString();

		const response = await fetch(imagePath);
		const blob = await response.blob();
		const file = new File([blob], fileName, {type: blob.type});

		const reader = new FileReader();
		return new Promise((resolve) => {
			reader.onloadend = () => {
				resolve([
					{
						file,
						dataURL: reader.result as string, // Base64 URL
					},
				]);
			};
			reader.readAsDataURL(blob);
		});
	}

	const formValues = useForm<RecipePayload>({
		resolver: yupResolver(validationSchema),
	});

	useEffect(() => {
		if (data) {
			formValues.setValue('name', name);
			formValues.setValue('email_address', email_address);
			formValues.setValue('title', title);
			formValues.setValue('description', description);
			formValues.setValue('ingredients', ingredients);
			formValues.setValue('instructions', instructions);
			formValues.setValue('date_added', date_added);
			formValues.setValue('id', id);
		}
	}, [data, formValues.setValue]);

	useEffect(() => {
		if (!!error) {
			return alertByError(error);
		}
		if (!!success) {
			return alertBySuccess('Successfully updated a recipe');
		}
	}, [error, success]);

	useEffect(() => {
		if (!isEmpty(data)) {
			setDefaultImage(data.image).then((data) => {
				const _data = data as ImageListType;
				const image = first(_data);

				if (image && image.file) {
					setImage(data as ImageListType);
					formValues.setValue('image', image.file);
				}
			});
		}
	}, [data]);

	return {
		formValues,
		isLoading,
		onSubmit,
		image,
	};
}

export default useEdit;
