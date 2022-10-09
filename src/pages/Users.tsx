import React, { useEffect } from 'react';
import useHttp from '../hooks/useHttp';
import Table from '../components/organisms/Table/Table';
import TableHead from '../components/atoms/TableHead/TableHead';
import TableRow from '../components/molecules/TableRow/TableRow';
import TableHeader from '../components/atoms/TableHeader/TableHeader';
import TableBody from '../components/molecules/TableBody/TableBody';
import TableData from '../components/atoms/TableData/TableData';

interface User {
	id: number;
	name: string;
	email: string;
	gender: string;
	status: string;
}

const Users = () => {
	const { getData, data, info } = useHttp();

	useEffect(() => {
		getData('https://gorest.co.in/public/v1/users', 'get');
	}, []);

	return (
		<Table>
			<colgroup></colgroup>
			<TableHead>
				<TableRow>
					<TableHeader>ID</TableHeader>
					<TableHeader>Name</TableHeader>
					<TableHeader>Gender</TableHeader>
					<TableHeader>Status</TableHeader>
				</TableRow>
			</TableHead>
			<TableBody>
				{data.map((user: User) => (
					<TableRow key={user.id}>
						<TableData>{user.id}</TableData>
						<TableData>{user.name}</TableData>
						<TableData>{user.gender}</TableData>
						<TableData>{user.status}</TableData>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default Users;
