import React from 'react';
import { Link } from 'react-router-dom';
import style from '../BooksCard/BooksCard.module.css';

import bookImg from '../../../images/book.jpg';

const BooksCard = ({ books }) => {
	return (
		<>
			{books?.map((item) => {
				return (
					<Link to={`${item.id}`} className={style.card} key={item.etag}>
						{
							<img
								src={item.volumeInfo.imageLinks?.thumbnail || bookImg}
								alt=""
								className={style.img}
							/>
						}
						<div className={style.content}>
							<p className={style.author}>{item.volumeInfo?.authors?.[0]}</p>
							<h3 className={style.name}>{item.volumeInfo.title.slice(0, 60)}</h3>
							{/* <p className={style.text}>{item.volumeInfo.subtitle}</p> */}
						</div>
					</Link>
				);
			})}
		</>
	);
};

export default BooksCard;
