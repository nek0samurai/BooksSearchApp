import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, URL, URL_OF_CURRENT_BOOK } from '../../constants/api';

export const fetchBooks = createAsyncThunk('books/fetchedBooks', async (params, thunkAPI) => {
	try {
		const response = await axios.get(
			`${URL}startIndex=${params.startIndex}&q=${params.search}&maxResults=20&orderBy=${params.sort}&key=${API_KEY}`,
		);
		return response.data;
	} catch (err) {
		const message = (err.response && err.response.data) || err.message;
		return thunkAPI.rejectWithValue(message);
	}
});

export const getMoreBooks = createAsyncThunk('books/getMoreBooks', async (params, thunkAPI) => {
	try {
		const response = await axios.get(
			`${URL}startIndex=${params.startIndex}&q=${params.search}&maxResults=20&key=${API_KEY}`,
		);
		return response.data;
	} catch (err) {
		const message = (err.response && err.response.data) || err.message;
		return thunkAPI.rejectWithValue(message);
	}
});

export const getCurrentBook = createAsyncThunk('books/searchedById', async (bookId, thunkAPI) => {
	try {
		const response = await axios.get(URL_OF_CURRENT_BOOK + bookId);
		return response.data;
	} catch (error) {
		const message = (error.response && error.response.data) || error.message;
		return thunkAPI.rejectWithValue(message);
	}
});
