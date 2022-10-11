import React, { useContext, useRef } from 'react';

import { ACTIONS } from '../../../state/actions';
import ReducerContext from '../../../state/useContext';
import Button from '../../atoms/Button/Button';

const AddDataModal = ({ commentsData, modalState }) => {
	const { dispatch } = useContext(ReducerContext);

	const genderRef = useRef('');
	const statusRef = useRef('');

	function closeModal() {
		dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: false });
	}
	return (
		<div
			className={`fixed flex items-center justify-center h-full w-full top-0 left-0 right-0 bottom-0 pt-[5rem] bg-zinc-800/20 backdrop-blur-sm z-[0]`}>
			<div className='flex flex-col items-center justify-between bg-slate-100 h-full w-full sm:max-w-[350px] md:max-h-[600px] rounded-lg px-sm'>
				<div className='w-full py-sm font-semibold'>
					<p className='text-sm'>Add user:</p>
				</div>

				<form className='flex flex-col w-full h-full gap-sm'>
					<div className='flex flex-col'>
						<label htmlFor='username'>Name</label>
						<input name='username' placeholder='user name' className='p-xs rounded-xl' />
					</div>
					<div className='flex flex-col'>
						<label htmlFor='email'>Email</label>
						<input name='email' type='email' placeholder='user email' className='p-xs rounded-xl' />
					</div>
					<div className='flex flex-col'>
						<label htmlFor='gender'>Gender</label>

						<select
							onChange={() => console.log(genderRef.current.value)}
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
							onChange={() => console.log(statusRef.current.value)}
							ref={statusRef}
							name='status'
							className='p-xs rounded-xl'>
							<option value='active'>active</option>
							<option value='inactive'>inactive</option>
						</select>
					</div>
					<div className='flex w-full gap-sm pt-md'>
						<Button onClickFn={closeModal}>Add user</Button>
						<Button onClickFn={closeModal}>Close modal</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddDataModal;
