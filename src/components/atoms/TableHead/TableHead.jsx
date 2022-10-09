import React from 'react';

const TableHead = ({ children }) => {
	return <thead className='bg-white z-100  border-t-2 border-baseVeryLight '>{children}</thead>;
};

export default TableHead;
