import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import style from './BookDetail.css';
import { getCurrentBook } from '../../redux/actions/bookActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import bookImg from '../../images/book.jpg';

const BookDetail = () => {
	const { oneBookData, error, loading, message, success } = useSelector((state) => state.book);

	const { code } = useParams();
	const dispatch = useDispatch();
	console.log(error);

	useEffect(() => {
		if (code) {
			dispatch(getCurrentBook(code.toString()));
		}
	}, [dispatch, code, error]);

	return (
		<section className="book">
			<div className="container">
				{/* {error && (
					<h3>
						{message.error.code}: {message.error.message}
					</h3>
				)} */}

				<div className="book-info">
					<Link to="/">
						<Button variant="contained">Back</Button>
					</Link>
					{oneBookData ? (
						<div className="book-top__info">
							<div className="book-top__info-img">
								<img
									src={oneBookData.volumeInfo?.imageLinks?.thumbnail || bookImg}
									className="info__img"
									alt=""
								/>
							</div>
							<div className="info__text">
								<h3 className="info__title">{oneBookData.volumeInfo?.title}</h3>
								<h4 className="info__author">
									{success ? oneBookData.volumeInfo?.authors?.join(', ') : message.error.message}
								</h4>
								<p className="info__description">
									{oneBookData.volumeInfo?.description || 'Описание отсутсвтует'}
								</p>
								<span className="info__page">
									Всего страниц: <b>{oneBookData.volumeInfo?.pageCount || '--'}</b>
								</span>
							</div>
						</div>
					) : (
						<h1>No details</h1>
					)}
				</div>
			</div>
		</section>
	);
};

export default BookDetail;
