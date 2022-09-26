import React from "react";
import AddBook from "./AddBook";

const Book = ({ title, author }) => {
  return (
    <>
      <div className="book-container">
        <p>
          {title} written by {author}
        </p>
        <button type="button">Comment</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
      <AddBook />
    </>
  );
};

export default Book;
