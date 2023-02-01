import { configureStore } from '@reduxjs/toolkit';
import { testReducer } from './slises/testSlise';

export const store = configureStore({
  reducer: {
    testReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
