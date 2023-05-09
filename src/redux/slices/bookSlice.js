import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks, getCurrentBook, getMoreBooks } from '../actions/bookActions';

const initialState = {
  booksData: [],
  totalBooks: 0,
  oneBookData: {},
  searchValue: '',
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
        console.log(action);
        state.loading = false;
        state.searchValue = action.meta.arg.searchValue;
        state.startIndex = action.meta.arg.startIndex;
        state.booksData = [...action.payload.items];
        state.totalBooks = action.payload.totalItems;
        state.success = true;
      })
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.booksData = [];
        state.searchValue = '';
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
        state.oneBookData = {};
        state.message = action.payload;
      });
  },
});

export const foundedBooks = (state) => state.book;
export const { setSearchValue, setGetMore } = bookSlice.actions;

export default bookSlice.reducer;
