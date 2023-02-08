import { useDispatch } from 'react-redux';
import { api } from '../../Api';
import { AppDispatch } from '../../types';
import { saveAllCuisine } from '../slises/commonSlice';

export const useAppDispatch: () => AppDispatch = useDispatch;

export const loadAllCuisine = () => async (dispatch: typeof useAppDispatch): Promise<void> => {
  const date = await api.loadAllCuisine();

  // @ts-ignore
  dispatch(saveAllCuisine(date.meals));
};
