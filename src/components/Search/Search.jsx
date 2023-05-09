import React from 'react';
import debounce from 'lodash.debounce';
import { useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBooks } from '../../redux/actions/bookActions';

import { style } from './Search.css';

const Search = ({ props }) => {
  const { startIndex, searchValue } = props;

  const dispatch = useDispatch();
  const inputRef = useRef('');
  const [value, setValue] = useState('');

  const updateInputValue = useCallback(
    debounce((searchValue) => {
      dispatch(fetchBooks({ searchValue, startIndex }));
    }, 1000),
    [],
  );

  const handleInputValue = (event) => {
    setValue(event.target.value);
    updateInputValue(event.target.value);
  };

  return (
    <>
      <input
        value={value}
        ref={inputRef}
        onChange={handleInputValue}
        placeholder="Введите название"
        type="text"
        className="input"
      />
    </>
  );
};

export default Search;
