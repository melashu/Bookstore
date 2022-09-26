import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookActionCreator } from '../redux/books/Book';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.book);
  const ADD_BOOK = 'ADD_BOOK';
  return (
    <>
      <h1>Add Books</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            bookActionCreator(ADD_BOOK, { title, author, id: bookList.length }),
          );
        }}
      >
        <input
          type="text"
          placeholder="Add Book Title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Add Book Author"
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default AddBook;
