import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from './pages/Users';

const App = () => {
	return (
		<div className='w-full'>
			<Routes>
				<Route path='/' element={<Users />} />
				<Route path='/posts' element={<Users />} />
				<Route path='/todos' element={<Users />} />
			</Routes>
		</div>
	);
};

export default App;
