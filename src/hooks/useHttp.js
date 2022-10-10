import axios from 'axios';
import { useContext, useState } from 'react';
import ReducerContext from '../state/useContext';

const useHttp = () => {
	const [data, setData] = useState([]);
	const { state, dispatch } = useContext(ReducerContext);

	async function getData(url, actionType) {
		try {
			const data = await axios(url);
			if (data.data.meta) dispatch({ type: `${actionType}_META`, payload: data.data.data });
			setData(data.data.data);

			dispatch({ type: actionType, payload: data.data.data });

			return data;
		} catch (err) {
			console.log(err);
			throw new Error('Something went wrong');
		}
	}
	return { getData, data };
};

export default useHttp;
