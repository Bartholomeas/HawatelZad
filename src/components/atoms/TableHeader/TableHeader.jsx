import React from 'react';

const TableHeader = ({ children }) => {
	return (
		<th
			className={`py-sm px-xs text-xs text-font
 table-cell text-left`}>
			{children}
		</th>
	);
};

export default TableHeader;
