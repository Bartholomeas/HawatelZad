import React, { useContext } from 'react';
import { ACTIONS } from '../../../state/actions';

import ReducerContext from '../../../state/useContext';
import Button from '../../atoms/Button/Button';
import NavbarLink from '../../atoms/NavbarLink/NavbarLink';
import AddDataModal from '../AddDataModal/AddDataModal';

const Navbar = () => {
	const { dispatch } = useContext(ReducerContext);

	function openAddUserModal() {
		dispatch({ type: ACTIONS.TOGGLE_ADD_USER, payload: true });
	}
	return (
		<div>
			<nav className='fixed flex items-center justify-between top-0 left-0 right-0 h-[5rem] bg-white border-b-blue-500 border-b-2 px-xs z-[10000]'>
				<p>
					<span className='font-bold text-blue-500'>Hawatel</span>
					App
				</p>
				<ul className=' flex justify-end items-center gap-sm w-full h-full bg-white px-xs'>
					<li>
						<NavbarLink route='/'>Users</NavbarLink>
					</li>
					<li>
						<NavbarLink route='/posts'>Posts</NavbarLink>
					</li>
					<li>
						<NavbarLink route='/todos'>Todos</NavbarLink>
					</li>
					<li>
						<Button onClickFn={() => openAddUserModal()}>+User</Button>
					</li>
				</ul>
			</nav>
			<AddDataModal />
		</div>
	);
};

export default Navbar;
