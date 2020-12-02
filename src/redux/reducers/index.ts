import { combineReducers } from '@reduxjs/toolkit';
import learnReducer from './learnSlice';
import pageReducer from './pageSlice';
import addReducer from './addSlice';

const rootReducer = combineReducers({
  learn: learnReducer,
  page: pageReducer,
  add: addReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
