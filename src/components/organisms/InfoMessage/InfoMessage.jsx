import React from 'react';

const InfoMessage = ({ infoProps }) => {
	return (
		<div
			className={`${
				infoProps.message.length === 0 ? 'hidden' : 'fixed'
			} flex flex-col w-full max-w-[200px] h-[100px] bottom-0 rounded-xl p 
		bg-zinc-200 z-[10000]
		${infoProps.success ? 'bg-lime-200' : 'bg-rose-200'}`}>
			<p>{infoProps.message} </p>
		</div>
	);
};

export default InfoMessage;
