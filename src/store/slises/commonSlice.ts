import { createSlice } from '@reduxjs/toolkit';
import { IRecipeById } from '../../types';

// Maybe not correct name
interface ICuisine {
  strArea: string
}
export interface IRandomSelection {
  strMeal: string;
  strArea: string;
  strMealThumb: string;
  idMeal: string;
}
export interface IState {
  allCuisines: ICuisine[];
  randomSelection: IRandomSelection[];
  activeRecipe: IRecipeById | null;

}

const initialState: IState = {
  allCuisines: [],
  randomSelection: [],
  activeRecipe: null,
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
    saveActiveRecipe: (state: IState, { payload }) => {
      state.activeRecipe = payload;
    },
  },
});

export const { saveAllCuisine, saveRandomSelection, saveActiveRecipe } = commonSlice.actions;

export const commonReducer = commonSlice.reducer;
