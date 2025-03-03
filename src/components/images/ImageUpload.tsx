import React, {useEffect, useState} from 'react';
import ImageUploader, {ImageListType} from 'react-images-uploading';

import {Box, Button, IconButton, Stack, Typography} from '@mui/material';
import {CloudUpload} from '@mui/icons-material';
import {FieldValues, UseFormReturn} from 'react-hook-form';
import {RecipePayload} from '@/models/recipe';
import {isEmpty} from 'lodash';

interface ImageUploadProps<T extends FieldValues> {
	defaultValue: ImageListType;
	formValues: UseFormReturn<T>;
	onChange: (image: File | undefined) => void;
}

const ImageUpload: React.FC<ImageUploadProps<RecipePayload>> = (props) => {
	const {formValues, onChange, defaultValue} = props;

	// console.log(defaultValue);

	const [image, setImage] = useState<ImageListType>(defaultValue);

	function handleChange(
		imageList: ImageListType,
		addUpdateIndex: number[] | undefined
	) {
		// onChange(imageList as never);
		setImage(imageList as never[]);

		onChange(imageList[0].file);
	}

	useEffect(() => {
		if (!isEmpty(defaultValue)) {
			setImage(defaultValue);
		}
	}, [defaultValue]);

	return (
		<Box>
			<ImageUploader
				value={image}
				onChange={handleChange}
				acceptType={['jpg', 'jpeg', 'png', 'webp', 'gif']}
				dataURLKey='dataURL'
			>
				{({
					imageList,
					onImageUpload,
					onImageRemove,
					dragProps,
					onImageUpdate,
				}) => (
					<Box
						sx={{
							display: 'flex',
							minHeight: '300px',
							width: '100%',
							alignItems: 'center',
							justifyContent: 'center',
							flexGrow: 1,
						}}
						onClick={onImageUpload}
						{...dragProps}
					>
						{isEmpty(image) && (
							<Stack textAlign='center'>
								<Box display='flex' justifyContent='center'>
									<IconButton>
										<CloudUpload color='primary' />
									</IconButton>
								</Box>

								<Typography variant='body1'>
									<strong>Upload</strong> your files here
								</Typography>
								<Typography variant='caption'>
									Files supported: img, png
								</Typography>
							</Stack>
						)}

						<input type='hidden' {...formValues.register('image')} />

						{imageList.map((image, index) => {
							return (
								<Box key={index} width='100%' height='100%'>
									<img src={image['dataURL']} alt='' width='200px' />
									<Box>
										{/* <button onClick={() => onImageUpdate(index)}>Update</button>
								<button onClick={() => onImageRemove(index)}>Remove</button> */}
									</Box>
								</Box>
							);
						})}
					</Box>
				)}
			</ImageUploader>
		</Box>
	);
};

export default ImageUpload;
