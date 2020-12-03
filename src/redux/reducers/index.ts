import { combineReducers } from '@reduxjs/toolkit';
import learnReducer from './learnSlice';
import pageReducer from './pageSlice';
import addReducer from './addSlice';
import sentencesReducer from './sentencesSlice';

const rootReducer = combineReducers({
  learn: learnReducer,
  page: pageReducer,
  add: addReducer,
  sentences: sentencesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
