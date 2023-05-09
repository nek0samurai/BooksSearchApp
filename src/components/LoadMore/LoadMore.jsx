import React, { useCallback, useEffect, useState } from 'react';
import styles from './LoadMore.css';
import { getMoreBooks } from '../../redux/actions/bookActions';
import { setGetMore } from '../../redux/slices/bookSlice';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';

const LoadMore = () => {
  const dispatch = useDispatch();
  let { startIndex, searchValue } = useSelector((state) => state.book);

  const handleMoreBooks = () => {
    dispatch(getMoreBooks({ searchValue, startIndex: startIndex + 12 }));
  };

  return (
    <>
      <div className="loadmore-container">
        <Button onClick={handleMoreBooks} variant="contained" className="loadmore-button">
          Load more
        </Button>
      </div>
    </>
  );
};

export default LoadMore;
