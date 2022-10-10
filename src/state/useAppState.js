import React, { useReducer } from 'react';
import { ACTIONS } from './actions';

const initialState = {
	usersMeta: [],
	usersData: [],

	postsData: [],
	postsData: [],

	todosData: [],
	todosData: [],
};

function appReducer(state, action) {
	switch (action.type) {
		case ACTIONS.SET_USERS:
			if (!action.payload) return { usersData: [] };
			return { ...state, usersData: action.payload };

		case ACTIONS.SET_USERS_META:
			if (!action.payload) return { usersMeta: [] };
			return { ...state, usersMeta: action.payload };

		case ACTIONS.SET_POSTS:
			if (!action.payload) return { postsData: [] };
			return { ...state, postsData: action.payload };

		case ACTIONS.SET_POSTS_META:
			if (!action.payload) return { postsMeta: [] };
			return { ...state, postsMeta: action.payload };

		case ACTIONS.SET_TODOS:
			if (!action.payload) return { todosData: [] };
			return { ...state, todosData: action.payload };

		case ACTIONS.SET_TODOS_META:
			if (!action.payload) return { todosMeta: [] };
			return { ...state, todosData: action.payload };

		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

const useAppState = () => {
	const [state, dispatch] = useReducer(appReducer, initialState);

	return { state, dispatch };
};

export default useAppState;