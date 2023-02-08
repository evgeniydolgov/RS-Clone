import { createSlice } from '@reduxjs/toolkit';

// Maybe not correct name
interface ICuisine {
  strArea: string
}
interface IRandomSelection {
  strMeal: string;
  strArea: string;
  strMealThumb: string;
  idMeal: number;
}

export interface IState {
  allCuisines: ICuisine[];
  randomSelection: IRandomSelection[];

}

const initialState: IState = {
  allCuisines: [],
  randomSelection: [],
};

export const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    saveAllCuisine: (state: IState, { payload }) => {
      state.allCuisines = payload;
    },
    saveRandomSelection: (state: IState, { payload }) => {
      state.randomSelection = payload;
    },
  },
});

export const { saveAllCuisine, saveRandomSelection } = commonSlice.actions;

export const commonReducer = commonSlice.reducer;
