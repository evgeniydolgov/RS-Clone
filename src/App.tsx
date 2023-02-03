import React, { useEffect } from 'react';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './store/slises/testSlise';
import { getCounter } from './store/selectors/testSelector';
import { thunkFunction } from './store/actions/testActions';
import { AppDispatch } from './types';

export const App = () => {
  const dispatch: AppDispatch = useDispatch();
  const count = useSelector(getCounter);

  // Added for an example how to use middleware. Needs to delete
  useEffect(() => {
    dispatch(thunkFunction);
  }, []);

  return (
    <div>
      <button type="button" onClick={() => dispatch(decrement())}>-</button>
      <div>{`Current value is ${count}`}</div>
      <button type="button" onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};
