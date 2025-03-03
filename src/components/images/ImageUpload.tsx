import React, {useEffect, useState} from 'react';
import {FieldValues, UseFormReturn} from 'react-hook-form';
import ImageUploader, {ImageListType} from 'react-images-uploading';

import {CloudUpload} from '@mui/icons-material';
import {Box, IconButton, Stack, Typography} from '@mui/material';

import {isEmpty} from 'lodash';
import {RecipePayload} from '@/models/recipe';

interface ImageUploadProps<T extends FieldValues> {
	resetValue?: boolean;
	defaultValue: ImageListType;
	formValues: UseFormReturn<T>;
	onChange: (image: File | undefined) => void;
}

const ImageUpload: React.FC<ImageUploadProps<RecipePayload>> = (props) => {
	const {formValues, onChange, defaultValue, resetValue} = props;

	const [image, setImage] = useState<ImageListType>(defaultValue);

	function handleChange(
		imageList: ImageListType,
		addUpdateIndex: number[] | undefined
	) {
		setImage(imageList as never[]);
		onChange(imageList[0].file);
	}

	useEffect(() => {
		if (!isEmpty(defaultValue)) {
			setImage(defaultValue);
		}
	}, [defaultValue]);

	useEffect(() => {
		if (resetValue) {
			setImage([]);
		}
	}, [resetValue]);

	return (
		<Box>
			<ImageUploader
				value={image}
				onChange={handleChange}
				acceptType={['jpg', 'jpeg', 'png', 'webp', 'gif']}
				dataURLKey='dataURL'
			>
				{({imageList, onImageUpload, dragProps}) => (
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
