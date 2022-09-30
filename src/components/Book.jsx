import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBook from './AddBook';
import '../css/Book.css';
import progress from '../image/progress.png';
import {
  fetchBookAsyncThank,
  getState,
  removeBookAsyncThunk,
} from '../redux/books/Book';

const Book = () => {
  const bookList = useSelector(getState);
  const dispatch = useDispatch();
  const chapterNumber = 1;
  const progressNumber = 50;
  useEffect(() => {
    dispatch(fetchBookAsyncThank());
  }, [dispatch]);

  return (
    <>
      <div className="book-container">
        <ul>
          {bookList.map((book, index) => (
            <li key={book.item_id} className="list-item">
              <div>
                <div className="book-info">
                  <p>{book.category}</p>
                  <h2>
                    {book.title}
                    {' '}
                  </h2>
                  <p>
                    {' '}
                    {book.author}
                  </p>
                </div>
                <div className="button-container">
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
                </div>
              </div>
              <div className="progress">
                <img src={progress} alt="" />
                <div className="status">
                  <span className="perecent">
                    {progressNumber + index}
                    %
                  </span>
                  <span className="completed">Completed</span>
                </div>
              </div>
              <div className="content">
                <span className="curren-chapter">Current Chapter</span>
                <span className="chapter">
                  Chapter
                  {' '}
                  {chapterNumber + index}
                </span>
                <button type="button" className="progress-button">
                  Update Progress
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <AddBook className="addbook" />
    </>
  );
};

export default Book;
