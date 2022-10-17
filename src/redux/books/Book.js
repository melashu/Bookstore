/* eslint-disable */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const bookActionCreator = (type, book) => ({
  type,
  book,
});
const apiKey = "0t8wRdNgjvYfS1p5u8Ho";

const fetchBookAsyncThank = createAsyncThunk(
  "book/fetchBookAsyncThank",
  async () => {
    const response = await axios
      .get(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books`
      )
      .catch(() => false);
    return response.data;
  }
);

const addBookAsyncThunk = createAsyncThunk(
  "book/addBookAsyncThunk",
  async (book) => {
    try {
      await axios.post(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books`,

        {
          item_id: book.item_id,
          title: book.title,
          author: book.author,
          category: book.category,
        }
      );
      return book;
    } catch (error) {
      return false;
    }
  }
);

const removeBookAsyncThunk = createAsyncThunk(
  "book/removeBookAsyncThunk",
  async (id) => {
    try {
      await axios.delete(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books/${id}`
      );
      return id;
    } catch (error) {
      return false;
    }
  }
);

const initialState = {
  books: [],
};

const createBookSlice = createSlice({
  name: "book",
  initialState,

  extraReducers: {
    [fetchBookAsyncThank.fulfilled]: (state, { payload }) => {
      if (payload) {
        const booksList = [];
        Object.keys(payload).forEach((key) => {
          const book = payload[key][0];
          book.item_id = key;
          booksList.push(book);
        });
        state.books = booksList;
      }
    },
    [addBookAsyncThunk.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.books.push(payload);
      }
    },
    [removeBookAsyncThunk.fulfilled]: (state, { payload }) => {
      if (payload) {
        const filteredArray = state.books.filter(
          (book) => book.item_id !== payload
        );
        state.books = filteredArray;
      }
    },
  },
});

const getState = (state) => state.book.books;

export {
  fetchBookAsyncThank,
  getState,
  addBookAsyncThunk,
  removeBookAsyncThunk,
};
export const { ADD_BOOK } = createBookSlice.actions;
export default createBookSlice.reducer;
