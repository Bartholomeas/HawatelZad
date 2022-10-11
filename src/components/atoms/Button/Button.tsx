import React from 'react';

const Button = ({ children, onClickFn, lessContrast }) => {
	return (
		<button
			onClick={() => onClickFn()}
			className={`w-full p-xs text-sm rounded-full 
hover:bg-blue-200 ${lessContrast ? 'bg-slate-200 ' : ' bg-sky-400'}`}>
			{children}
		</button>
	);
};

export default Button;
