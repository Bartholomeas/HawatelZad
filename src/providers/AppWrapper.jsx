import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/organisms/Navbar/Navbar';
import ContextProvider from './ContextProvider';

const AppWrapper = ({ children }) => {
	//Wrapper na całą aplikację mający za zadanie zapewnić dostęp do Contextu, Navbaru, routingu oraz szkieletu strony
	return (
		<BrowserRouter>
			<ContextProvider>
				<div className='flex flex-col items-center justify-center w-full max-w-[900px] h-full mx-auto pt-[5rem]'>
					<Navbar />
					{children}
				</div>
			</ContextProvider>
		</BrowserRouter>
	);
};

export default AppWrapper;
