import axios from 'axios';
import { useContext, useState } from 'react';
import ReducerContext from '../state/useContext';

const useHttp = () => {
	const { state, dispatch } = useContext(ReducerContext);
	const [respondInfo, setRespondInfo] = useState({ success: true, message: '' });
	const [loader, setLoader] = useState(false);

	async function getData(url, actionType) {
		try {
			const data = await axios(url);
			if (data.data.meta.pagination)
				dispatch({ type: `${actionType}_META`, payload: data.data.meta.pagination });

			dispatch({ type: actionType, payload: data.data.data });
			return;
		} catch (err) {
			throw new Error('Something went wrong');
		}
	}

	async function postData(url, body) {
		setLoader(true);
		try {
			const data = await axios.post(url, body, {
				headers: {
					Authorization: `Bearer 554b116953394a79a9ae31c331e2d4e958a9b1cf3bc7975e3af52157112195ac`,
				},
			});
			setLoader(false);
			setRespondInfo({ success: true, message: `Success, request added ${data.status}` });
			// setTimeout(() => {
			// 	setRespondInfo({ ...respondInfo, message: '' });
			// }, 4000);

			return;
		} catch (err) {
			setLoader(false);
			setRespondInfo({ success: false, message: 'Failed, something went wrong' });
			// setTimeout(() => {
			// 	setRespondInfo({ ...respondInfo, message: '' });
			// }, 4000);
			throw new Error('Something went wrong');
		}
	}

	return { getData, postData, respondInfo, loader };
};

export default useHttp;
