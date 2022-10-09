import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import Navbar from './components/organisms/Navbar/Navbar';
import Users from './pages/Users';
import AppLayout from './providers/AppLayout';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Users />} />
				<Route path='/posts' element={<Users />} />
				<Route path='/todos' element={<Users />} />
			</Routes>
		</div>
	);
};

export default App;
