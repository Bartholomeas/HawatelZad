import React, { useContext } from 'react';
import { ACTIONS } from '../../../state/actions';
import ReducerContext from '../../../state/useContext';
import UserEmail from '../../atoms/UserEmail/UserEmail';
import UserName from '../../atoms/UserName/UserName';
import UserBody from '../../atoms/UserBody/UserBody';

const InfoModal = ({ commentsData, modalState }) => {
	const { dispatch } = useContext(ReducerContext);
	function closeModal() {
		dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: false });
	}
	return (
		<div
			className={`${
				modalState ? 'fixed' : 'hidden'
			} flex items-center justify-center h-full w-full top-0 left-0 right-0 bottom-0 bg-zinc-800/20 backdrop-blur-sm`}>
			<div className='flex flex-col items-center justify-between bg-slate-100 h-full w-full sm:max-w-[350px] md:max-h-[400px] rounded-lg p'>
				<div className='w-full overflow-y-scroll py-sm'>
					<p className='text-xs mb-[3rem]'>
						<span className='font-semibold'>Comments for post </span>
					</p>
					<ul className='flex flex-col gap-sm rounded-xl'>
						{commentsData.map(comment => (
							<li className='flex flex-col p-xs bg-white' key={comment.id}>
								<UserName>{comment.name}</UserName>
								<UserEmail>{comment.email}</UserEmail>
								<UserBody>{comment.body}</UserBody>
							</li>
						))}
					</ul>
				</div>
				<button
					onClick={closeModal}
					className='w-full p-xs text-sm rounded-full bg-blue-100
				hover:bg-blue-200 '>
					Close modal
				</button>
			</div>
		</div>
	);
};

export default InfoModal;
