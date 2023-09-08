import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks, getCurrentBook, getMoreBooks } from '../actions/bookActions';

const initialState = {
	booksData: [],
	totalBooks: 0,
	oneBookData: {},

	startIndex: 0,
	loading: false,
	success: false,
	error: false,
	message: '',
};

export const bookSlice = createSlice({
	name: 'book',
	initialState: initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder
			.addCase(fetchBooks.fulfilled, (state, action) => {
				state.loading = false;

				state.startIndex = action.meta.arg.startIndex;
				state.booksData = [...action.payload.items];
				state.totalBooks = action.payload.totalItems;
				state.success = true;
				state.message = '';
			})
			.addCase(fetchBooks.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchBooks.rejected, (state, action) => {
				state.loading = false;
				state.error = true;
				state.message = action.payload.error.message;
				state.booksData = [];

				state.startIndex = 0;
			})
			.addCase(getMoreBooks.fulfilled, (state, action) => {
				state.startIndex += 12;
				state.error = false;
				state.loading = false;
				state.booksData = [...state.booksData, ...action.payload.items];
			})
			.addCase(getMoreBooks.pending, (state) => {
				state.loading = true;
			})
			.addCase(getMoreBooks.rejected, (state, action) => {
				state.error = true;
				state.loading = false;
				state.startIndex = 0;
				state.message = action.payload;
			})
			.addCase(getCurrentBook.pending, (state) => {
				state.loading = true;
			})
			.addCase(getCurrentBook.fulfilled, (state, action) => {
				state.loading = false;
				state.oneBookData = action.payload;
			})
			.addCase(getCurrentBook.rejected, (state, action) => {
				state.error = true;
				state.loading = false;
				state.success = false;
				state.oneBookData = {};
				state.booksData = [...state.booksData];
				state.message = action.payload;
			});
	},
});

export const foundedBooks = (state) => state.book;
export const { setValue, setGetMore } = bookSlice.actions;

export default bookSlice.reducer;
