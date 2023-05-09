import React from 'react';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { foundedBooks } from '../../redux/slices/bookSlice';
import Loader from '../Loader/Loader';
import BooksCard from './BooksCard/BooksCard';
// import LoadMore from '../Pagination/Pagination';

import style from './BooksCard/BooksCard.module.css';
import { Link } from 'react-router-dom';
import LoadMore from '../LoadMore/LoadMore';

const BooksRow = () => {
  const { error, loading, success, totalBooks, booksData } = useSelector((state) => state.book);
  const foundedBooksData = useSelector(foundedBooks);

  const [bookData, setBookData] = useState([]);

  const dispatch = useDispatch();

  console.log(bookData);

  useEffect(() => {
    if (success) {
      setBookData(foundedBooksData);
    }
  }, [foundedBooksData, dispatch, error, success, totalBooks]);

  return (
    <>
      <h1 className={style.title}>
        {bookData.length === 0 ? 'Начните поиск' : `Найдено ${totalBooks}`}
      </h1>

      {loading ? (
        <Loader />
      ) : (
        <section className={style.row}>
          <BooksCard books={booksData}></BooksCard>
        </section>
      )}
      {bookData.length === 0 ? <></> : <LoadMore></LoadMore>}
    </>
  );
};

export default BooksRow;
