import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import style from './BookDetail.css';
import { getCurrentBook } from '../../redux/actions/bookActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import bookImg from '../../images/book.jpg';

const BookDetail = () => {
  const { oneBookData, error, loading } = useSelector((state) => state.book);
  const { code } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (code) {
      dispatch(getCurrentBook(code.toString()));
    }
  }, [dispatch, code, error]);

  console.log(oneBookData);

  return (
    <section className="book">
      <div className="container">
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
                <h4 className="info__author">{oneBookData.volumeInfo?.authors?.join(', ')}</h4>
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
