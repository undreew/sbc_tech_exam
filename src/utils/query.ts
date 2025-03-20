import qs from 'qs';

export const queryStringify = (queries: any) => {
	// temp any
	return qs.stringify(queries);
};
