import { AppDispatch } from '../../types';
import { getCounter } from '../selectors/testSelector';
import { testForCheckAsync } from '../slises/testSlise';
import { RootState } from '../store';

// This have added for an example only
export const thunkFunction = (dispatch: AppDispatch, getState: () => RootState) => {
  // logic here that can dispatch actions or read state
  // Also you can send request to server from here

  const counter = getCounter(getState());

  dispatch(testForCheckAsync(counter + 20));
};
