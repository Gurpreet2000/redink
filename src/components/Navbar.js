import React from 'react';
import DropdownMenu from './DropdownMenu';

const Navbar = ({ navItems }) => {
	const renderNavItems = navItems.map(item => {
		return (
			<div className="nav-item" key={item.id}>
				{item.title}
				{item.submenu ? <b> ^</b> : null}
				{item.submenu ? <DropdownMenu items={item.submenu} /> : null}
			</div>
		);
	});

	return <div id="navbar">{renderNavItems}</div>;
};

export default Navbar;
