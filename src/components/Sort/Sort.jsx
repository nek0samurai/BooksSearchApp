import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setSort } from '../../redux/slices/filterSlice';

import style from './Sort.module.css';

const Sort = () => {
	const dispatch = useDispatch();
	const sortList = ['relevance', 'newest'];

	const [sortId, setSortId] = useState(sortList[0]);

	const handleSort = (e) => {
		setSortId(e.target.value);
	};

	useEffect(() => {
		dispatch(setSort(sortId));
	}, [sortId]);

	return (
		<div className={style.filter__row}>
			<label htmlFor="select">Sort by:</label>
			<select value={sortId} className={style.filter__select} onChange={handleSort} name="" id="">
				{sortList.map((item, id) => {
					return (
						<option key={id} value={item}>
							{item}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Sort;
