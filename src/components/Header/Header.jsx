import React from 'react';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import { useSelector } from 'react-redux';

import style from './Header.module.css';

const Header = () => {
	// const { searchValue, startIndex } = useSelector((state) => state.book);
	// const { sort } = useSelector((state) => state.filter);

	return (
		<header className={style.header}>
			<div className={style.container}>
				<div className={style.main__info}>
					<h1 className={style.main__title}>Поиск книг</h1>
					<p className={style.main__text}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, perspiciatis.
						Voluptatem saepe ea eligendi repudiandae totam cumque nulla doloribus rem possimus? Nemo
						sed exercitationem ratione repudiandae beatae aliquam ipsa commodi?
					</p>
					<Search />
					<Filter />
				</div>
			</div>
		</header>
	);
};

export default Header;
