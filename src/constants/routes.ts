export const ROUTES = {
	LANDING: {
		INDEX: '/',
	},

	RECIPE: {
		INDEX: '/recipe/',
		CREATE: '/recipe/create',
		VIEW: {
			INDEX: '/recipe/:id',
			EDIT: '/recipe/:id/edit',
			DELETE: '/recipe/:id/delete',
		},
	},
};
