import axios from 'axios';
import { useContext, useState } from 'react';
import ReducerContext from '../state/useContext';

const useHttp = () => {
	const { state, dispatch } = useContext(ReducerContext);

	async function getData(url, actionType) {
		try {
			const data = await axios(url);
			if (data.data.meta.pagination)
				dispatch({ type: `${actionType}_META`, payload: data.data.meta.pagination });

			dispatch({ type: actionType, payload: data.data.data });
			return;
		} catch (err) {
			console.log(err);
			throw new Error('Something went wrong');
		}
	}
	return { getData };
};

export default useHttp;
