import React from 'react';

interface Props {
	children: React.ReactNode;
}
const TableRow = ({ children }: Props) => {
	return <tr className='w-full border-solid border-b-2 border-baseVeryLight'>{children}</tr>;
};

export default TableRow;