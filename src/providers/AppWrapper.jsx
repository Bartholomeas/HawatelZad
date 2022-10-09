import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/organisms/Navbar/Navbar';
import ContextStateProvider from './ContextProvider';

const AppWrapper = ({ children }) => {
	return (
		<BrowserRouter>
			<ContextStateProvider>
				<div className='flex flex-col items-center justify-center w-full max-w-[900px] h-full mx-auto'>
					<Navbar />
					{children}
				</div>
			</ContextStateProvider>
		</BrowserRouter>
	);
};

export default AppWrapper;
