import { createSlice } from '@reduxjs/toolkit';
import { IRecipeById } from '../../types';

// Maybe not correct name
interface ICuisine {
  strArea: string
}
interface IRandomSelection {
  strMeal: string;
  strArea: string;
  strMealThumb: string;
  idMeal: string;
}
interface INameByCuisine {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}
export interface IState {
  allCuisines: ICuisine[];
  randomSelection: IRandomSelection[];
  activeRecipe: IRecipeById | null;
  recipesByCuisineName: INameByCuisine[];
  activeCountry: string | null;

}

const initialState: IState = {
  allCuisines: [],
  randomSelection: [],
  activeRecipe: null,
  recipesByCuisineName: [],
  activeCountry: null,
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
    saveRecipeByCuisineName: (state: IState, { payload }) => {
      state.recipesByCuisineName = payload;
    },
    saveCountryName: (state: IState, { payload }) => {
      state.activeCountry = payload;
    },
  },
});

export const {
  saveAllCuisine, saveRandomSelection, saveActiveRecipe, saveRecipeByCuisineName, saveCountryName,
} = commonSlice.actions;

export const commonReducer = commonSlice.reducer;
