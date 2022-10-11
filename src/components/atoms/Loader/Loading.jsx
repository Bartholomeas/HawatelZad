import React from 'react';

const Loading = ({ isActive }) => {
	return (
		<div
			className={`${
				isActive ? 'absolute' : 'hidden'
			} top-[50%] left-[50%] w-[40px] h-[40px] rounded-full border-t-4 border-b-4 border-t-sky-400 border-b-sky-500 z-[100000] animate-spin `}></div>
	);
};

export default Loading;
