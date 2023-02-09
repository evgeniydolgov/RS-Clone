import { useDispatch } from 'react-redux';
import { api } from '../../Api';
import { AppDispatch } from '../../types';
import { saveAllCuisine, saveRandomSelection, saveRecipeById } from '../slises/commonSlice';

export const useAppDispatch: () => AppDispatch = useDispatch;
const IDispatch = typeof useAppDispatch;

export const loadAllCuisine = () => async (dispatch: typeof useAppDispatch): Promise<void> => {
  const date = await api.loadAllCuisine();

  // @ts-ignore
  dispatch(saveAllCuisine(date.meals));
};

export const loadRandomSelection = () => async (dispatch: typeof useAppDispatch): Promise<void> => {
  const date = await api.loadRandomSelection();

  // @ts-ignore
  dispatch(saveRandomSelection(date.meals));
};
export const loadRecipeById = (id: number) => async (dispatch: typeof IDispatch): Promise<void> => {
  const date = await api.loadRecipeById(id);

  // @ts-ignore
  dispatch(saveRecipeById(date.meals));
};
