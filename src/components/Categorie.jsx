import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categorieStatus } from '../redux/categories/categories';

const Categorie = () => {
  const catagory = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>
        {' '}
        {catagory}
      </h2>
      <button
        className="btn-cat"
        type="button"
        onClick={() => {
          dispatch(categorieStatus());
        }}
      >
        Check status
      </button>
    </div>
  );
};

export default Categorie;
