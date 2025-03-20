declare namespace Fetch {
	interface Response {
		data: any;
		status: number;
	}

	interface Error {
		status: number;
		message: string;
		code: string | undefined; // custom error codes
	}
}
