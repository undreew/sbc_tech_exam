import {map, slice} from 'lodash';
import {ImageListType} from 'react-images-uploading';

export const imagePathToFile = async (
	path: string,
	folder: string = '/images/'
): Promise<ImageListType> => {
	const imgArr = map(path);
	const fileName = slice(imgArr, folder.length, imgArr.length)
		.join('')
		.toString();

	const response = await fetch(path);
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
};
