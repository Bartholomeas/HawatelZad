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
import { convertDate } from '../utils/convertDate';

const Todos = () => {
	const { getData } = useHttp();
	const { state } = useContext(ReducerContext);


	//Ta sama zasada, co w Posts
	useEffect(() => {
		{
			state.todosData.length === 0 &&
				getData('https://gorest.co.in/public/v1/todos', ACTIONS.SET_TODOS);
		}
	}, []);

	return (
		<div className='flex flex-col items-center'>
			<Table>
				<colgroup>
					<col className='w-[5%]'></col>
					<col className='w-[9%]'></col>
					<col className='w-[56%]'></col>
					<col className='w-[20%]'></col>
					<col className='w-[10%]'></col>
				</colgroup>
				<TableHead>
					<TableRow>
						<TableHeader>Id</TableHeader>
						<TableHeader>User id</TableHeader>
						<TableHeader>Title</TableHeader>
						<TableHeader>Date</TableHeader>
						<TableHeader>Status</TableHeader>
					</TableRow>
				</TableHead>
				<TableBody>
					{state.todosData.map(todo => (
						<TableRow key={todo.id}>
							<TableData>{todo.id}</TableData>
							<TableData>{todo.user_id}</TableData>
							<TableData>{todo.title}</TableData>
							<TableData>{convertDate(todo.due_on)}</TableData>
							<TableData>{todo.status}</TableData>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Pagination metaProps={state.todosMeta} actionType={ACTIONS.SET_TODOS} endpoint='todos' />
		</div>
	);
};

export default Todos;
