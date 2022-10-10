import React from 'react';

const TableRow = ({ children }) => {
	return <tr className='w-full border-solid border-b-2 border-baseVeryLight'>{children}</tr>;
};

export default TableRow;