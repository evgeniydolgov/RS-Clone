import { createSlice } from '@reduxjs/toolkit';

// Maybe not correct name
interface ICuisine {
  strArea: string
}

export interface IState {
  allCuisines: ICuisine[];
}

const initialState: IState = {
  allCuisines: [],
};

export const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    saveAllCuisine: (state: IState, { payload }) => {
      state.allCuisines = payload;
    },
  },
});

export const { saveAllCuisine } = commonSlice.actions;

export const commonReducer = commonSlice.reducer;
