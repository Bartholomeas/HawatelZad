import React from 'react';

const TableData = ({ children }) => {
	return (
		<td
			className={` px-xs text-sm text-font h-[6rem]
			first:pl-xs first last:pr-xs
			md:table-cell
			`}>
			<p>{children}</p>
		</td>
	);
};

export default TableData;
