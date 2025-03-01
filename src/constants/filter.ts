export const SORT_BY_VALUE = {
	asc: 'asc',
	desc: 'desc',
};

export const SORT_BY_LABEL = {
	[SORT_BY_VALUE['asc']]: 'ASC',
	[SORT_BY_VALUE['desc']]: 'DESC',
};

export const SORT_BY = {
	[SORT_BY_VALUE['asc']]: SORT_BY_LABEL['asc'],
	[SORT_BY_VALUE['desc']]: SORT_BY_LABEL['desc'],
};

export const FILTER_BY_FAVORITE_VALUE = {
	yes: 'yes',
	no: 'no',
};

export const FILTER_BY_FAVORITE_LABEL = {
	[FILTER_BY_FAVORITE_VALUE['yes']]: 'Yes',
	[FILTER_BY_FAVORITE_VALUE['no']]: 'No',
};

export const FILTER_BY_FAVORITE = {
	[FILTER_BY_FAVORITE_VALUE['yes']]: FILTER_BY_FAVORITE_LABEL['yes'],
	[FILTER_BY_FAVORITE_VALUE['no']]: FILTER_BY_FAVORITE_LABEL['no'],
};
