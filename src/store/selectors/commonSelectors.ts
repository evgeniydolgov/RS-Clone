import { RootState } from '../store';

const getCommon = (state: RootState) => state.commonReducer;

export const getAllCuisine = (state: RootState) => getCommon(state).allCuisines;

export const getRandomSelection = (state: RootState) => getCommon(state).randomSelection;
