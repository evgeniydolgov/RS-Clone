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
interface IRecipeById {
  idMeal: number;
  strMeal: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
}

export interface IState {
  allCuisines: ICuisine[];
  randomSelection: IRandomSelection[];
  recipeById: IRecipeById[];

}

const initialState: IState = {
  allCuisines: [],
  randomSelection: [],
  recipeById: [],
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
    saveRecipeById: (state: IState, { payload }) => {
      state.recipeById = payload;
    },
  },
});

export const { saveAllCuisine, saveRandomSelection, saveRecipeById } = commonSlice.actions;

export const commonReducer = commonSlice.reducer;
