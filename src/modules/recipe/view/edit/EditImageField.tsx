import React from 'react';
import {ImageListType} from 'react-images-uploading';

import {PageCard} from '@/components/page';
import {InputImage} from '@/components/input';

interface Props {
	data: ImageListType;
}

function EditImageField(props: Props) {
	const {data} = props;

	return (
		<PageCard>
			<InputImage data={data} />
		</PageCard>
	);
}

export default EditImageField;
