import React from 'react';
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { foundedBooks } from '../../redux/slices/bookSlice';
import Loader from '../Loader/Loader';
import BooksCard from './BooksCard/BooksCard';

import style from './BooksCard/BooksCard.module.css';

import LoadMore from '../LoadMore/LoadMore';

const BooksRow = () => {
	const { error, loading, success, totalBooks, booksData, message } = useSelector(
		(state) => state.book,
	);
	const [bookData, setBookData] = useState([]);
	const { search, category } = useSelector((state) => state.filter);

	const foundedBooksData = useSelector(foundedBooks);

	const filteredBookData = booksData.filter((product) =>
		product.volumeInfo.categories?.[0].toLowerCase().includes(category),
	);

	console.log(filteredBookData);

	useEffect(() => {
		if (success) {
			setBookData(foundedBooksData);
		}
	}, [error, success, totalBooks]);

	return (
		<div className={style.container}>
			<h1 className={style.title}>{!totalBooks ? '' : `Найдено всего ${totalBooks}`}</h1>

			{loading ? (
				<Loader />
			) : (
				<section className={style.row}>
					<BooksCard books={category === 'all' ? booksData : filteredBookData}></BooksCard>
				</section>
			)}
			{bookData.length === 0 ? <></> : <LoadMore></LoadMore>}
		</div>
	);
};

export default BooksRow;
