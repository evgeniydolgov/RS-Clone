import React, { useEffect } from 'react';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { decrement, increment } from './store/slises/testSlise';
import { getCounter } from './store/selectors/testSelector';
import { thunkFunction } from './store/actions/testActions';
import { AppDispatch } from './types';
import { MainPage } from './components/MainPage';
import { RecipePage } from './components/RecipePage';
import { Layout } from './components/Layout';

export const App = () => {
  const dispatch: AppDispatch = useDispatch();
  const count = useSelector(getCounter);

  // Added for an example how to use middleware. Needs to delete
  useEffect(() => {
    dispatch(thunkFunction);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="recipe" element={<RecipePage />} />
        </Route>
      </Routes>

      {/* <Header />
      <MainPage />
      <RecipePage />
      <Footer /> */}
      <div className="example">
        <button type="button" onClick={() => dispatch(decrement())}>-</button>
        <div>{`Current value is ${count}`}</div>
        <button type="button" onClick={() => dispatch(increment())}>+</button>
      </div>
    </>
  );
};
