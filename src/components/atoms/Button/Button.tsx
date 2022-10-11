import React from 'react';

const Button = ({ children, onClickFn }) => {
	return (
		<button
			onClick={() => onClickFn()}
			className='w-full p-xs text-sm rounded-full bg-blue-100
hover:bg-blue-200 '>
			{children}
		</button>
	);
};

export default Button;
