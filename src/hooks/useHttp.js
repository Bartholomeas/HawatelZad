import axios from 'axios';
import { useContext, useState } from 'react';
import ReducerContext from '../state/useContext';

const useHttp = () => {
	//Customowy hook do obsługi zapytań http oraz obsługi stanu aplikacji z zapytaniami związanymi
	const { dispatch } = useContext(ReducerContext);
	//Stan komunikatu o błędzie bądź sukcesie po wysłaniu zapytania
	const [respondInfo, setRespondInfo] = useState({ success: true, message: '' });
	//Funkcja togglująca stan loadera
	const [loader, setLoader] = useState(false);

	//Funkcja mająca za zadanie pobieranie danych z API w zależności od przekazanego adresu oraz typu akcji z hooka useAppState, która ma za zadanie zmienić stan aplikacji. Funkcja aktualizuje stan aplikacji o pobrane dane
	async function getData(url, actionType) {
		setLoader(true);
		try {
			const data = await axios(url);
			if (data.data.meta.pagination)
				dispatch({ type: `${actionType}_META`, payload: data.data.meta.pagination });
			dispatch({ type: actionType, payload: data.data.data });
			setLoader(false);

			return;
		} catch (err) {
			setLoader(false);
			throw new Error('Something went wrong');
		}
	}

	//Funkcja wysyłająca zapytanie do API w zależności od przekazanego adresu oraz danych
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

			setTimeout(() => {
				setRespondInfo({ success: true, message: '' });
			}, 3000);
			return;
		} catch (err) {
			setLoader(false);
			setRespondInfo({ success: false, message: 'Failed, something went wrong' });

			setTimeout(() => {
				setRespondInfo({ success: false, message: '' });
			}, 3000);
			throw new Error('Something went wrong');
		}
	}

	return { getData, postData, respondInfo, loader };
};

export default useHttp;
