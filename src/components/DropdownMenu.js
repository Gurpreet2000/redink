import React from 'react';

const DropdownMenu = ({ items }) => {
	const renderItems = items.map(item => {
		return (
			<div className="dropdown-item" key={item.id}>
				{item.title}
				{item.submenu ? <b> ^</b> : null}
				{item.submenu ? <DropdownMenu items={item.submenu} /> : null}
			</div>
		);
	});

	return <div className="dropdown-menu">{renderItems}</div>;
};

export default DropdownMenu;
