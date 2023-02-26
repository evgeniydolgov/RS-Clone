import type { store } from './index';

export type AppDispatch = typeof store.dispatch;

export interface IRecipeById {
  idMeal: string;
  strMeal: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
}
