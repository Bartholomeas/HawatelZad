import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLink = ({ children, route }) => {
	//Komponent, który wyświetla linki w navbarze, które są przekierowywane do podanej ścieżki za sprawą react-router-dom

	return (
		<NavLink
			end
			to={route}
			className={({ isActive }) => (isActive ? 'font-bold text-blue-800 text-sm' : 'text-sm')}>
			{children}
		</NavLink>
	);
};

export default NavbarLink;
