import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/organisms/Navbar/Navbar';

const AppLayout = ({ children }) => {
	return (
		<BrowserRouter>
			<div className=''>
				<Navbar />
				{children}
			</div>
		</BrowserRouter>
	);
};

export default AppLayout;
