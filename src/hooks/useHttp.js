import axios from 'axios';
import { useContext, useState } from 'react';
import ReducerContext from '../state/useContext';

const useHttp = () => {
	const [info, setInfo] = useState([]);
	const [data, setData] = useState([]);
	const { state, dispatch, ACTIONS } = useContext(ReducerContext);

	async function getData(url, method = 'get') {
		try {
			const data = method === 'get' ? await axios(url) : await axios.post(url);
			if (data.data.meta) setInfo(data.data.meta);
			setData(data.data.data);

			dispatch({ type: ACTIONS.SET_USERS, payload: data.data.data });

			return data;
		} catch (err) {
			console.log(err);
			throw new Error('Something went wrong');
		}
	}
	return { getData, data, info };
};

export default useHttp;
