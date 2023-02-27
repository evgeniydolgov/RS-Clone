import { RootState } from '../store';

export const getCounter = ({ testReducer }: RootState) => testReducer.counter;
