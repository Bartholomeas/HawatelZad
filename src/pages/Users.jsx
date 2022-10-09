import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useVirtualizer } from '@tanstack/react-virtual';

const Users = () => {
	const [users, setUsers] = useState([]);

	const rowVirtualizer = useVirtualizer({
		count: 100,
	});

	useEffect(() => {
		getUsers();
		console.log(users);
	}, []);

	async function getUsers() {
		try {
			const data = await axios('https://gorest.co.in/public/v1/users');
			setUsers(data.data.data);
		} catch {
			throw new Error('Something went wrong');
		}
	}

	return (
		<div ref={parentRef} className='List'>
			<div className={`w-[${rowVirtualizer.getTotalSize()}px]`}></div>
		</div>
	);
};

export default Users;
