import React from 'react';
import useAppState from '../state/useAppState';
import ReducerContext from '../state/useContext';

const ContextProvider = ({ children }) => {
	const { state, dispatch } = useAppState();

	const providerState = {
		state,
		dispatch,
	};

	return <ReducerContext.Provider value={providerState}>{children}</ReducerContext.Provider>;
};

export default ContextProvider;
