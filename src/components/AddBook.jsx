import React from "react";

const AddBook = () => {
  return (
    <>
      <h1>Add Books</h1>
      <form>
        <input type="text" placeholder="Add Book Title" />
        <input type="text" placeholder="Add Book Author" />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default AddBook;
