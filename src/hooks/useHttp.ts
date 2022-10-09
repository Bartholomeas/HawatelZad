import axios from 'axios';
import { useState } from 'react';

const useHttp = () => {
	const [info, setInfo] = useState([]);
	const [data, setData] = useState([]);

	async function getData(url: string, method: string = 'get') {
		try {
			const data = method === 'get' ? await axios(url) : await axios.post(url);
			if (data.data.meta) setInfo(data.data.meta);
			setData(data.data.data);
			return data;
		} catch (err) {
			console.log(err);
			throw new Error('Something went wrong');
		}
	}
	return { getData, data, info };
};

export default useHttp;
