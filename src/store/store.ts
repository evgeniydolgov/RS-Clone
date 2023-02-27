import { combineReducers } from '@reduxjs/toolkit';
import { testReducer } from './slises/testSlise';
import { commonReducer } from './slises/commonSlice';

export const rootReducer = combineReducers({
  // Here you can rename reducer like you want
  testReducer,
  commonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
