import React from 'react';
import useAppState from '../state/useAppState';
import ReducerContext from '../state/useContext';
import { ACTIONS } from '../state/actions';

const ContextProvider = ({ children }) => {
	const { state, dispatch } = useAppState();

	const providerState = {
		state,
		dispatch,
		ACTIONS,
	};

	return <ReducerContext.Provider value={providerState}>{children}</ReducerContext.Provider>;
};

export default ContextProvider;
