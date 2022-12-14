import { useState, useContext, useRef } from 'react';
import useHttp from '../../../hooks/useHttp';
import { ACTIONS } from '../../../state/actions';
import ReducerContext from '../../../state/useContext';
import Button from '../../atoms/Button/Button';
import Loading from '../../atoms/Loader/Loading';
import InfoMessage from '../InfoMessage/InfoMessage';

//Domyślny stan formularza
const initialState = {
	name: '',
	email: '',
	gender: 'male',
	status: 'active',
};

const AddDataModal = ({ commentsData, modalState }) => {
	// Modal, który pozwala na dodawanie nowych użytkowników

	//State oraz dispatch przekazane z customowego hooka useReducer za pomocą React Contextu, aby cała aplikacja posiadała tę samą instancję stanu
	const { state, dispatch } = useContext(ReducerContext);
	const [userData, setUserData] = useState(initialState);
	const [error, setError] = useState(false);

	//Referencje zaciągnięte z customowego hooka useHttp w celu obsługi zapytań oraz rzeczy z nimi związanych
	const { postData, respondInfo, loader } = useHttp();

	//Referencje do dwóch pól 'select'
	const genderRef = useRef();
	const statusRef = useRef();

	function closeModal() {
		dispatch({ type: ACTIONS.TOGGLE_ADD_USER, payload: false });
	}

	//funkcja obsługująca zmianę stanu formularza
	function handleChange(e) {
		const { name, value } = e;
		setUserData({ ...userData, [name]: value });
	}

	//funkcja obsługująca wysłanie formularza i ewentualne wyświetlenie komunikatu o błędzie
	function addUser() {
		for (let key in userData) {
			setError(false);
			if (userData[key] === '') {
				setError(true);
				return;
			}
		}
		if (error) {
			return;
		}
		postData('https://gorest.co.in/public/v1/users', userData);
	}

	return (
		<div
			className={`${
				state.addUserOpen ? 'fixed' : 'hidden'
			} flex items-center justify-center h-full w-full top-0 left-0 right-0 bottom-0 pt-[5rem] bg-zinc-800/20 backdrop-blur-sm z-[0]`}>
			<div className='flex flex-col items-center justify-between bg-slate-100 h-fit py-md w-full sm:max-w-[350px] md:max-h-[600px] rounded-lg px-sm'>
				<div className='w-full py-sm font-semibold'>
					<p className='text-sm'>Add user:</p>
				</div>

				<form onSubmit={e => e.preventDefault()} className='flex flex-col w-full h-full gap-sm'>
					<div className='flex flex-col'>
						<label htmlFor='name'>Name</label>
						<input
							onChange={e => handleChange(e.target)}
							name='name'
							placeholder='user name'
							className='p-xs rounded-xl'
						/>
					</div>
					<div className='flex flex-col'>
						<label htmlFor='email'>Email</label>
						<input
							onChange={e => handleChange(e.target)}
							name='email'
							type='email'
							placeholder='user email'
							className='p-xs rounded-xl'
						/>
					</div>
					<div className='flex flex-col'>
						<label htmlFor='gender'>Gender</label>

						<select
							onChange={() => handleChange(genderRef.current)}
							ref={genderRef}
							name='gender'
							className='p-xs rounded-xl'>
							<option value='male'>male</option>
							<option value='female'>female</option>
						</select>
					</div>
					<div className='flex flex-col'>
						<label htmlFor='status'>Status</label>
						<select
							onChange={() => handleChange(statusRef.current)}
							ref={statusRef}
							name='status'
							className='p-xs rounded-xl'>
							<option value='active'>active</option>
							<option value='inactive'>inactive</option>
						</select>
						{error && (
							<p className='text-rose-600 font-semibold text-xs pt-sm'>
								You need to pass all values!
							</p>
						)}
					</div>
					<div className='flex w-full gap-sm pt-md'>
						<Button lessContrast={true} onClickFn={closeModal}>
							Close modal
						</Button>
						<Button onClickFn={() => addUser()}>Add user</Button>
					</div>
				</form>
			</div>

			{/* Komponent wyświetlający komunikat o sukcesie bądź błędzie */}
			<InfoMessage infoProps={respondInfo} />
			<Loading isActive={loader} />
		</div>
	);
};

export default AddDataModal;
