import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBook from './AddBook';
import {
  fetchBookAsyncThank,
  getState,
  removeBookAsyncThunk,
} from '../redux/books/Book';

const Book = () => {
  const bookList = useSelector(getState);
  const dispatch = useDispatch();
  console.log(bookList);
  useEffect(() => {
    dispatch(fetchBookAsyncThank());
  }, [dispatch]);
  return (
    <>
      <div className="book-container">
        <ul>
          {bookList.map((book) => (
            <li key={book.item_id}>
              {book.title}
              {' '}
              and
              {book.author}
              <button type="button">Comment</button>
              <button
                type="button"
                onClick={() => {
                  dispatch(removeBookAsyncThunk(book.item_id));
                }}
              >
                Remove
              </button>
              <button type="button">Edit</button>
            </li>
          ))}
        </ul>
      </div>
      <AddBook />
    </>
  );
};

export default Book;
