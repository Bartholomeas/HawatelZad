import React, { useReducer } from 'react';
import { ACTIONS } from './actions';

function appReducer(state, action) {
	switch (action.type) {
		case ACTIONS.SET_USERS:
			return { state };

		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

const useAppState = () => {
	const [state, dispatch] = useReducer(appReducer, []);

	return { state, dispatch };
};

export default useAppState;
