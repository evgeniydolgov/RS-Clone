import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { rootReducer } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {},
    },
  }),
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
