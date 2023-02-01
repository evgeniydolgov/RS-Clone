import { createSlice } from '@reduxjs/toolkit';

export interface IState {
  counter: number;
}

const initialState: IState = {
  counter: 1,
};

export const counterSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    increment: (state: IState) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const testReducer = counterSlice.reducer;
