import { combineReducers } from '@reduxjs/toolkit';
import { testReducer } from './slises/testSlise';

export const rootReducer = combineReducers({
  // Here you can rename reducer like you want
  testReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
