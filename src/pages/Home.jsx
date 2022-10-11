import React, { useContext, useEffect } from 'react';
import useHttp from '../hooks/useHttp';
import ReducerContext from '../state/useContext';
import { ACTIONS } from '../state/actions';
import NavbarLink from '../components/atoms/NavbarLink/NavbarLink';

const Home = () => {
	const { getData } = useHttp();
	const { state } = useContext(ReducerContext);

	//Komponent wyswietlający "landing page", gdzie przechodzimy do konkretnej podstrony po kliknięciu w link w navbarze bądź na stronie głównej

	return (
		<div className='absolute flex flex-col items-center py-md top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
			<p>What do you want to see?</p>
			<div className='flex flex-col gap-[2rem] border-2 border-zinc-400 p rounded-lg'>
				<NavbarLink route='/HawatelZad/users'>Users</NavbarLink>
				<NavbarLink route='/HawatelZad/Posts'>Posts</NavbarLink>
				<NavbarLink route='/HawatelZad/todos'>Todos</NavbarLink>
			</div>
		</div>
	);
};

export default Home;
