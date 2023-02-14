import { RootState } from '../store';

const getCommon = (state: RootState) => state.commonReducer;

export const getAllCuisine = (state: RootState) => getCommon(state).allCuisines;

export const getRandomSelection = (state: RootState) => getCommon(state).randomSelection;

export const getActiveRecipe = (state: RootState) => getCommon(state).activeRecipe;

export const getRecipeByNameCuisine = (state: RootState) => getCommon(state).recipesByCuisineName;

export const getActiveCountry = (state: RootState) => getCommon(state).activeCountry;
