import React, { useContext } from 'react';
import { ACTIONS } from '../../../state/actions';
import ReducerContext from '../../../state/useContext';

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
						<li className='flex flex-col p-xs bg-white'>
							<p className='text-xs font-semibold text-zinc-800'>Prathamerth Jain IV</p>
							<p className='text-xs text-zinc-500'>prathamesh_jain_iv@heathcote.name</p>

							<p className='text-sm py-xs text-zinc-800'>
								Nemo dignissimos ut. Est doloribus optio
							</p>
						</li>
						{commentsData.map(comment => (
							<li className='flex flex-col p-xs bg-white' key={comment.id}>
								<p className='text-xs font-semibold text-zinc-800'>{comment.name}</p>
								<p className='text-xs text-zinc-500'>{comment.email}</p>

								<p className='text-sm py-xs text-zinc-800'>{comment.body}</p>
							</li>
						))}
					</ul>
				</div>
				<button
					onClick={closeModal}
					className='w-full p-xs text-sm rounded-full bg-rose-100
				hover:bg-rose-200 '>
					Close modal
				</button>
			</div>
		</div>
	);
};

export default InfoModal;
