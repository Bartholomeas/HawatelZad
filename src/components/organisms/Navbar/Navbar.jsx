import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className=''>
			<ul className='bg-sky-500 flex justify-end items-center gap-sm w-full'>
				<li>
					<NavLink to='/'>Users</NavLink>
				</li>
				<li>
					<NavLink to='/posts'>Posts</NavLink>
				</li>
				<li>
					<NavLink to='/todos'>Todos</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
