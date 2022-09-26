import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/Book';
import categorieReducer from './categories/categories';

const rootReducer = combineReducers({
  book: bookReducer,
  category: categorieReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
