import {useSnackbar} from 'notistack';
import React, {createContext, useContext} from 'react';

interface Props {
	children: React.ReactNode;
}

interface IAlertContext {
	alertBySuccess: (message: string) => void;
	alertByError: (message: string) => void;
}

export const AlertContext = createContext<IAlertContext>({
	alertByError: () => ({}),
	alertBySuccess: () => ({}),
});

function AlertProvider(props: Props) {
	const {children} = props;

	const {enqueueSnackbar} = useSnackbar();

	function alertBySuccess(message: string) {
		enqueueSnackbar(message, {variant: 'success'});
	}

	function alertByError(message: string) {
		enqueueSnackbar(message, {variant: 'error'});
	}

	return (
		<AlertContext.Provider value={{alertByError, alertBySuccess}}>
			{children}
		</AlertContext.Provider>
	);
}

export const useAlert = () => useContext(AlertContext);

export default AlertProvider;
