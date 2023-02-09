import { useDispatch } from 'react-redux';
import { api } from '../../Api';
import { AppDispatch } from '../../types';
import { saveAllCuisine, saveRandomSelection, saveActiveRecipe } from '../slises/commonSlice';

export const useAppDispatch: () => AppDispatch = useDispatch;

export const loadAllCuisine = () => async (dispatch: AppDispatch): Promise<void> => {
  const date = await api.loadAllCuisine();

  dispatch(saveAllCuisine(date.meals));
};

export const loadRandomSelection = () => async (dispatch: AppDispatch): Promise<void> => {
  const date = await api.loadRandomSelection();

  dispatch(saveRandomSelection(date.meals));
};
export const loadRecipeById = (id: string) => async (dispatch: AppDispatch): Promise<void> => {
  const date = await api.loadRecipeById(id);

  dispatch(saveActiveRecipe(date.meals[0]));
};
