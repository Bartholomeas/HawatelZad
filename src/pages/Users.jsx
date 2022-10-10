import React, { useContext, useEffect } from 'react';
import useHttp from '../hooks/useHttp';
import Table from '../components/organisms/Table/Table';
import TableHead from '../components/atoms/TableHead/TableHead';
import TableRow from '../components/molecules/TableRow/TableRow';
import TableHeader from '../components/atoms/TableHeader/TableHeader';
import TableBody from '../components/molecules/TableBody/TableBody';
import TableData from '../components/atoms/TableData/TableData';
import ReducerContext from '../state/useContext';
import { ACTIONS } from '../state/actions';
import Pagination from '../components/organisms/Pagination/Pagination';

const Users = () => {
	const { getData } = useHttp();
	const { state } = useContext(ReducerContext);

	useEffect(() => {
		{
			state.usersData.length === 0 &&
				getData('https://gorest.co.in/public/v1/users', ACTIONS.SET_USERS);
		}
	}, []);

	return (
		<div className='flex flex-col items-center'>
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
					{state.usersData.map(user => (
						<TableRow key={user.id}>
							<TableData>{user.id}</TableData>
							<TableData>{user.name}</TableData>
							<TableData>{user.gender}</TableData>
							<TableData>{user.status}</TableData>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Pagination metaProps={state.usersMeta} actionType={ACTIONS.SET_USERS} />
		</div>
	);
};

export default Users;
