import React from 'react';
import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../redux/slices/filterSlice';
import style from './Categories.module.css';

const Categories = () => {
	const dispatch = useDispatch();
	const categoriesList = ['art', 'biography', 'computers', 'history', 'medical', 'poetry'];

	const [value, setValue] = useState('');

	const handleCategoryChange = (e) => {
		setValue(e.target.value);
	};

	useEffect(() => {
		dispatch(setCategory(value));
	}, [value]);

	return (
		<div className={style.filter__row}>
			<label htmlFor="select">Categories:</label>
			<select
				value={value}
				className={style.filter__select}
				onChange={handleCategoryChange}
				name=""
				id="">
				<option value="all">all</option>
				{categoriesList.map((item, index) => {
					return (
						<option key={index} value={item}>
							{item}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Categories;
