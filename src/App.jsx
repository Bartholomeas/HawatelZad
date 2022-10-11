import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Todos from './pages/Todos';
import Users from './pages/Users';

const App = () => {
	//Komponent, który wyświetla odpowiednią podstronę w zależności od ścieżki
	return (
		<div className='w-full'>
			<Routes>
				<Route exact path='/HawatelZad' element={<Home />} />
				<Route path='/HawatelZad/users' element={<Users />} />
				<Route path='/HawatelZad/posts' element={<Posts />} />
				<Route path='/HawatelZad/todos' element={<Todos />} />
			</Routes>
		</div>
	);
};

export default App;
