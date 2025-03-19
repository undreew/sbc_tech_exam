import React, {useEffect, useState} from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import ImageUploader, {ImageListType} from 'react-images-uploading';

import {CloudUpload} from '@mui/icons-material';
import {Box, IconButton, Stack, Typography} from '@mui/material';

import {isEmpty, join, keys, map} from 'lodash';
import {ACCEPTED_IMAGE_FILES} from '@/constants/mimetypes';

interface ImageUploadProps {
	resetValue?: boolean;
	defaultValue: ImageListType;
	register: UseFormRegisterReturn;
	onChange: (image: File | undefined) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = (props) => {
	const {onChange, defaultValue, resetValue, register} = props;

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

	const acceptType = map(keys(ACCEPTED_IMAGE_FILES));

	return (
		<Box>
			<ImageUploader
				value={image}
				onChange={handleChange}
				acceptType={acceptType}
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
							cursor: 'pointer',
							flexGrow: 1,
						}}
						onClick={onImageUpload}
						{...dragProps}
					>
						<Stack textAlign='center'>
							{isEmpty(image) && (
								<>
									<Box display='flex' justifyContent='center'>
										<IconButton>
											<CloudUpload color='primary' />
										</IconButton>
									</Box>

									<Typography variant='body1'>
										<strong>Upload</strong> your files here
									</Typography>
									<Typography variant='caption'>
										Files supported: {join(acceptType, ', ')}
									</Typography>
								</>
							)}
							{imageList.map((image, index) => {
								const item = image.file as File;
								return (
									<Box key={index} width='100%' height='100%'>
										<img
											src={image['dataURL']}
											width='200px'
											alt={`${item.name}-${item.type}-${index}`}
										/>
									</Box>
								);
							})}
						</Stack>

						<input type='hidden' {...register} />
					</Box>
				)}
			</ImageUploader>
		</Box>
	);
};

export default ImageUpload;
