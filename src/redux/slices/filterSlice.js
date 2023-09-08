import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sort: '',
	search: '',
	category: 'all',
	startIndex: 0,
};

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setSort(state, action) {
			state.sort = action.payload;
		},
		setSearch(state, action) {
			state.search = action.payload;
		},
		setCategory(state, action) {
			state.category = action.payload;
		},
	},
});

export const { setSort, setSearch, startIndex, setCategory } = filterSlice.actions;

export default filterSlice.reducer;
