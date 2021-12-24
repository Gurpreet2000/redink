import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NewCategoryForm from './components/NewCategoryForm';

const NAVBAR = [
	{
		id: 0,
		title: 'Home',
		submenu: null,
	},
	{
		id: 1,
		title: 'Dropdown',
		submenu: [
			{
				id: 0.11506544867386781,
				title: 'First Level',
				submenu: null,
			},
			{
				id: 0.9096374873390101,
				title: 'Any Page',
				submenu: null,
			},
		],
	},
	{
		id: 2,
		title: 'Mega Menu',
		submenu: null,
	},
	{
		id: 3,
		title: 'Last',
		submenu: null,
	},
];

const App = () => {
	const [navItems, setNavItems] = useState(NAVBAR);

	const addNavItem = (id, title) => {
		const getItem = items => {
			if (items.length === 0) return;
			const next = [];
			const result = items.find(item => {
				if (item.submenu) next.push(...item.submenu);
				return item.id === id;
			});
			return result ? result : getItem(next);
		};
		const tempNavBar = navItems;
		const newCategory = { id: Math.random(), title, submenu: null };
		const ans = getItem(tempNavBar);
		ans.submenu === null
			? (ans.submenu = [newCategory])
			: ans.submenu.push(newCategory);
		setNavItems([...tempNavBar]);
	};

	return (
		<div id="app">
			<Navbar navItems={navItems} />
			<NewCategoryForm navItems={navItems} addNavItem={addNavItem} />
		</div>
	);
};

export default App;
