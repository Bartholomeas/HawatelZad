import React from 'react';

const TableRow = ({ children, onClickFn }) => {
	//Komponent wyświetlający pojedynczy wiersz tabeli, który może być klikalny
	return (
		<tr
			onClick={onClickFn}
			className={`w-full border-solid border-b-2 border-baseVeryLight ${
				onClickFn && 'cursor-pointer'
			}
			transition-colors
			hover:bg-slate-100`}>
			{children}
		</tr>
	);
};

export default TableRow;
