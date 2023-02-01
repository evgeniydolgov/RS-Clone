import React from 'react';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './store/slises/testSlise';
import { getCounter } from './store/selectors/testSelector';

export const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCounter);

  return (
    <div>
      <button type="button" onClick={() => dispatch(decrement())}>-</button>
      <div>{`Current value is ${count}`}</div>
      <button type="button" onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};
