import React, { useEffect, useState } from 'react';

const NewCategoryForm = ({ navItems, addNavItem }) => {
	const [name, setName] = useState('');
	const [parent, setParent] = useState('');
	const [options, setOptions] = useState([]);
	const [err, setErr] = useState(null);

	useEffect(() => {
		const titles = [];
		const getTitles = items => {
			items.forEach(item => {
				titles.push(
					<option value={item.id} key={item.id}>
						{item.title}
					</option>
				);
				if (item.submenu) getTitles(item.submenu);
			});
			return null;
		};
		getTitles(navItems);
		setOptions(titles);
	}, [navItems]);

	const onSubmit = e => {
		e.preventDefault();
		if (name === '' || parent === '') {
			setErr('All fields required.');
			return;
		}
		// console.log(name, parent);
		addNavItem(Number(parent), name);
		setName('');
		setParent('');
	};

	return (
		<form id="form">
			<h2>Add a New Category</h2>
			<label>
				Category Name
				<input
					type="text"
					className="input-field"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			</label>
			<label>
				Parent Category
				<select
					name="parent"
					className="input-field"
					value={parent}
					onChange={e => setParent(e.target.value)}
				>
					<option value="">Choose a Parent</option>
					{options.map(title => title)}
				</select>
			</label>
			{err ? (
				<div style={{ color: 'red', fontSize: 'small' }}>{err}</div>
			) : null}
			<button type="submit" className="btn" onClick={onSubmit}>
				Add Category
			</button>
		</form>
	);
};

export default NewCategoryForm;
