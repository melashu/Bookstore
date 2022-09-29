import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBook from './AddBook';
import { bookActionCreator } from '../redux/books/Book';

const Book = () => {
  const bookList = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const REMOVE_BOOK = 'REMOVE_BOOK';
  return (
    <>
      <div className="book-container">
        <ul>
          {bookList.map((book) => (
            <li key={book.id}>
              {book.title}
              {' '}
              and
              {book.author}
              <button type="button">Comment</button>
              <button
                type="button"
                onClick={() => {
                  dispatch(bookActionCreator(REMOVE_BOOK, { id: book.id }));
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
