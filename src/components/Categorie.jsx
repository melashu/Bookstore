import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categorieStatus } from '../redux/categories/categories';

const Categorie = () => {
  const catagory = useSelector((state) => state.category);
  const dispatch = useDispatch();
  dispatch(categorieStatus());
  return <div>{catagory}</div>;
};

export default Categorie;
