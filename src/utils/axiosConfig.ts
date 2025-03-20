import cleanDeep from 'clean-deep';
import axios, {AxiosError, AxiosResponse} from 'axios';

axios.defaults.timeout = 50 * 1000; // 50 seconds before timeout

axios.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error: AxiosError) {
		const errorResult = {
			status: 404,
			code: 'not_found',
			message: 'Your request could not be found. Please check and try again.',
		} as Fetch.Error;

		if (error.response) {
			const errorResponse: AxiosResponse = error.response;

			// set message
			errorResult.message = errorResponse.data.errors?.message;

			// set status
			errorResult.status = errorResponse.status;

			// set code
			errorResult.code = errorResponse.data.errors?.code;
		}

		return Promise.reject(cleanDeep(errorResult));
	}
);
