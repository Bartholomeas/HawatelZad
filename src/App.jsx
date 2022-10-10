import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Posts from './pages/Posts';
import Todos from './pages/Todos';
import Users from './pages/Users';

const App = () => {
	return (
		<div className='w-full'>
			<Routes>
				<Route path='/' element={<Users />} />
				<Route exact path='/posts' element={<Posts />} />
				<Route exact path='/todos' element={<Todos />} />
			</Routes>
		</div>
	);
};

export default App;
