export const formatFormData = <T = never>(data: T | any) => {
	const formData = new FormData();

	for (const key in data) {
		if (key === 'image' && data.image instanceof File) {
			formData.append(key, data.image);
		} else {
			formData.append(key, String(data[key as keyof T]));
		}
	}

	return formData;
};
