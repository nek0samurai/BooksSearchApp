import React from 'react';
import Sort from '../Sort/Sort';
import Categories from '../Categories/Categories';
import style from './Filter.module.css';

const Filter = () => {
	return (
		<div className={style.container}>
			<div className={style.row}>
				<Categories />
				<Sort />
			</div>
		</div>
	);
};

export default Filter;
