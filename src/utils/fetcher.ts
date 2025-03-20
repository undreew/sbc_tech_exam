import axios, {AxiosRequestConfig, Method} from 'axios';

export const fetcher = <D = never>(
	method: Method,
	url: string,
	params?: object,
	options?: AxiosRequestConfig
) => {
	const config: AxiosRequestConfig = {
		url,
		method,
		...options,
	};

	if (method.toUpperCase() === 'GET') {
		config.params = params;
	} else {
		config.data = params;
	}

	return axios.request<D>(config).then((res) => res);
};
