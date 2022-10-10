import React, { useState } from 'react';
import useHttp from '../../../hooks/useHttp';

const Pagination = ({ metaProps, actionType, endpoint }) => {
	const { getData } = useHttp();
	const [inputValue, setInputValue] = useState(0);

	function getSpecifiedPage(pageNumber = 1) {
		getData(`https://gorest.co.in/public/v1/${endpoint}?page=${pageNumber}`, actionType);
	}
	return (
		<div className='flex flex-col items-center justify-center w-full h-auto max-w-[300px] p-sm'>
			<ul className=' flex items-end rounded-full justify-around gap-xl w-full text-xs py-xs bg-slate-200'>
				<li>
					<button
						onClick={() =>
							metaProps.links.previous && getData(metaProps.links.previous, actionType)
						}
						className='prevPage font-bold text-sm'>
						{'<'}
					</button>
				</li>

				<li>
					<button onClick={() => getSpecifiedPage(1)}>1</button>
				</li>

				<li>
					<form
						className='relative flex flex-col-reverse items-center'
						onSubmit={e => e.preventDefault()}>
						<input
							className='bg-transparent border-2 border-b-0 border-slate-300 rounded-t-xl w-[5rem] text-center'
							type='number'
							min='1'
							onChange={e => {
								setInputValue(e.target.value);
							}}
							placeholder={`${metaProps.page}`}
						/>
						<button
							className='absolute w-[5rem] border-slate-300 rounded-b-xl bottom-0 translate-y-full p-xs border-2 bg-slate-200 hover:bg-slate-300 transition-colors'
							onClick={() => getSpecifiedPage(inputValue)}>
							Go to
						</button>
					</form>
				</li>
				<li>
					<button onClick={() => getSpecifiedPage(metaProps.pages)}>{metaProps.pages}</button>
				</li>
				<li>
					<button
						onClick={() => metaProps.links.next && getData(metaProps.links.next, actionType)}
						className='nextPage font-bold text-sm'>
						{'>'}
					</button>
				</li>
			</ul>
			<p className='totalPositions text-xs py-sm mt-[2rem]'>
				All positions: <span className='font-bold'>{metaProps.total}</span>
			</p>
		</div>
	);
};

export default Pagination;
