import React from 'react';

import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBooks } from '../../redux/actions/bookActions';
import { setSearch } from '../../redux/slices/filterSlice';
import style from './Search.module.css';

const Search = () => {
	const dispatch = useDispatch();
	const { sort, search, startIndex, category } = useSelector((state) => state.filter);

	// const { startIndex } = props;

	const inputRef = useRef('');
	const [value, setValue] = useState('');
	// const [queryValue, setQueryValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(setSearch(value));
		getBooks();
	};
	const getBooks = async () => {
		dispatch(fetchBooks({ search, sort, startIndex }));
	};

	const handleInputValue = (event) => {
		setValue(event.target.value);
	};

	useEffect(() => {
		getBooks();
	}, [sort, search, startIndex, category]);

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					value={value}
					ref={inputRef}
					onChange={handleInputValue}
					placeholder="Введите название"
					type="text"
					className={style.input}
				/>
			</form>
		</>
	);
};

export default Search;
