import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/organisms/Navbar/Navbar';

interface Props {
	children: React.ReactNode | React.ReactNode[];
}

const AppLayout = ({ children }: Props) => {
	return (
		<BrowserRouter>
			<div className='flex flex-col items-center justify-center w-full max-w-[900px] h-full mx-auto'>
				<Navbar />
				{children}
			</div>
		</BrowserRouter>
	);
};

export default AppLayout;
