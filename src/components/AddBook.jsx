import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookAsyncThunk } from "../redux/books/Book";
import { ADD_BOOK as bookAction } from "../redux/books/Book";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [catagory, setCatagory] = useState("Business");
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.book.books);

  return (
    <>
      <h1>Add Books</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addBookAsyncThunk({
              item_id: Math.random(100),
              title: title,
              author: author,
              category: catagory,
            })
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
        <select onChange={(e) => setCatagory(e.target.value)}>
          <option value="Business">Business</option>
          <option value="Fiction">Fiction</option>
          <option value="Programming">Programming</option>
          <option value="Self eelopment">Self delopment</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default AddBook;
