import React, { useReducer } from 'react';
import { ACTIONS } from './actions';

// Serce aplikacji, hook zarządzający jej stanem i aktualizujący go. Tutaj przechowywane są wszystkie dane pobrane z api, a także stan komponentów, które nie są w stanie zarządzać swoim stanem samodzielnie.

const initialState = {
	usersMeta: [],
	usersData: [],

	postsData: [],
	postsMeta: [],

	todosData: [],
	todosMeta: [],

	commentsData: [],
	commentsMeta: [],

	commentsOpen: false,
	addUserOpen: false,
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
			return { ...state, todosMeta: action.payload };

		case ACTIONS.SET_COMMENTS:
			if (!action.payload) return { commentsData: [] };
			return { ...state, commentsData: action.payload };

		case ACTIONS.SET_COMMENTS_META:
			if (!action.payload) return { commentsMeta: [] };
			return { ...state, commentsMeta: action.payload };

		case ACTIONS.TOGGLE_COMMENTS:
			return { ...state, commentsOpen: action.payload };
		case ACTIONS.TOGGLE_ADD_USER:
			return { ...state, addUserOpen: action.payload };

		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

const useAppState = () => {
	const [state, dispatch] = useReducer(appReducer, initialState);

	return { state, dispatch };
};

export default useAppState;
