import React from 'react';
import { useAppDispatch } from '../../hooks';
import { loadRecipeById } from '../../store/actions/commonActions';
import './SortListByAreaStyles.css';

interface ISortLIstByArea {
  url: string;
  strMeal:string;
  id: string;
}

export const SortListByArea = ({ url, strMeal, id }: ISortLIstByArea) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(loadRecipeById(id));
  };

  return (
    <button type="button" className="one-dish" onClick={onClick}>
      <img src={url} className="dish__img-cuisine" alt="Dish" />
      <div className="dish-back">
        <h3 className="dish-title">{strMeal}</h3>
        <div className="dish-logo" />
      </div>
    </button>
  );
};
