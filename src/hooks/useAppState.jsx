import React, { useReducer } from 'react';

const initialState = {};

function appReducer(state, action) {
	switch (action.type) {
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

const useAppState = () => {
	const [state, dispatch] = useReducer(appReducer, initialState);

	return { state, dispatch };
};

export default useAppState;
