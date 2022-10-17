import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsyncThunk } from '../redux/books/Book';
import '../css/AddBook.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [catagory, setCatagory] = useState('Business');
  const dispatch = useDispatch();

  return (
    <div className="add-book-container">
      <h1>Add Books</h1>
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addBookAsyncThunk({
              item_id: Math.random(100),
              title,
              author,
              category: catagory,
            }),
          );
          setTitle('');
          setAuthor('');
        }}
      >
        <input
          type="text"
          placeholder="Add Book Title"
          required
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Add Book Author"
          required
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
        <select onChange={(e) => setCatagory(e.target.value)}>
          <option value="Business">Business</option>
          <option value="Fiction">Fiction</option>
          <option value="Programming">Programming</option>
          <option value="Self eelopment">Self delopment</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
