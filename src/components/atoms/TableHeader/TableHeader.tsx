import React from 'react';
interface Props {
	children: string;
}
const TableHeader = ({ children }: Props) => {
	return (
		<th
			className={`py-sm px-xs text-xs text-font
 table-cell text-left`}>
			{children}
		</th>
	);
};

export default TableHeader;
