import React, { useEffect } from 'react';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { decrement, increment } from './store/slises/testSlise';
import { getCounter } from './store/selectors/testSelector';
import { thunkFunction } from './store/actions/testActions';
import { AppDispatch } from './types';
import { MainPage } from './components/MainPage';
import { RecipeCard } from './components/RecipeCard';
import { Layout } from './components/Layout';
import { QuizPage } from './components/QuizPage';
import { AuthorizePage } from './components/AuthorizePage';
import { SortCuisinesRecipesByArea } from './components/SortCuisinesRecipesByArea';

export const App = () => {
  const dispatch: AppDispatch = useDispatch();
  const count = useSelector(getCounter);

  // Added for an example how to use middleware. Needs to delete
  useEffect(() => {
    dispatch(thunkFunction);
  }, []);

  return (
    <>
      <SortCuisinesRecipesByArea />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="quiz" element={<QuizPage />} />
          <Route path="authorize" element={<AuthorizePage />} />
          <Route path="recipe" element={<RecipeCard />} />
        </Route>
      </Routes>
      {/* <Header />
      <MainPage />
      <RecipePage />
      <RecipeCard />
      <Footer /> */}
      <div className="example">
        <button type="button" onClick={() => dispatch(decrement())}>-</button>
        <div>{`Current value is ${count}`}</div>
        <button type="button" onClick={() => dispatch(increment())}>+</button>
      </div>
    </>
  );
};
