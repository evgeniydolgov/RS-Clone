import { RootState } from '../store';

const getCommon = (state: RootState) => state.commonReducer;

export const getAllCuisine = (state: RootState) => getCommon(state).allCuisines;

// if you want to use one position from getAllCuisine(for example name, id, etc), that:
// export const getCuisineByName = (state: RootState, name) => {
//   const all = getAllCuisine(state);

//   return all.find(((item) => item === name));
// };
