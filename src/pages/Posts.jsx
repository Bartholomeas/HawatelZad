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
import InfoModal from '../components/organisms/InfoModal/InfoModal';

const Posts = () => {
	const { getData } = useHttp();
	const { state, dispatch } = useContext(ReducerContext);

	useEffect(() => {
		{
			state.postsData.length === 0 &&
				getData('https://gorest.co.in/public/v1/posts', ACTIONS.SET_POSTS);
		}
	}, [openComments]);

	function openComments(postId) {
		getData(`https://gorest.co.in/public/v1/comments?post_id=${postId}`, ACTIONS.SET_COMMENTS);
		dispatch({ type: ACTIONS.TOGGLE_COMMENTS, payload: true });
	}

	return (
		<div className='flex flex-col items-center'>
			<Table>
				<colgroup>
					<col className='w-[5%]'></col>
					<col className='w-[10%]'></col>
					<col className='w-[20%]'></col>
					<col className='w-[65%]'></col>
				</colgroup>
				<TableHead>
					<TableRow>
						<TableHeader>Id</TableHeader>
						<TableHeader>User id</TableHeader>
						<TableHeader>Title</TableHeader>
						<TableHeader>Body</TableHeader>
					</TableRow>
				</TableHead>
				<TableBody>
					{state.postsData.map(post => (
						<TableRow onClickFn={() => openComments(post.id)} key={post.id}>
							<TableData>{post.id}</TableData>
							<TableData>{post.user_id}</TableData>
							<TableData>{post.title}</TableData>
							<TableData>{post.body}</TableData>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Pagination metaProps={state.postsMeta} actionType={ACTIONS.SET_POSTS} endpoint='posts' />
			<InfoModal commentsData={state.commentsData} modalState={state.commentsOpen} />
		</div>
	);
};

export default Posts;
