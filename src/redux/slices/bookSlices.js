import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import books from '../../fakeData/books.json'

const fetchBooks = createAsyncThunk(
    'book/fetchBooks',
    async () => {
      const response = await fetch("https://redux-book-shelf.herokuapp.com/books")
      .then(res => res.json())
      return response
    }
  )

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        discover: books,
        readingList: [],
        finishedList: [],
    },
    reducers:{
        addToReadingList: (state,{payload}) => {
            state.readingList.push(payload);
          },
          removeFromReadingList: (state,{payload}) => {
            state.readingList = state.readingList.filter(book => book.id !== payload.id);
          },
    },
});

export const {addToReadingList, removeFromReadingList} = bookSlice.actions;

export default bookSlice.reducer 