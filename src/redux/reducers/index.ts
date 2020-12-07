import { combineReducers } from '@reduxjs/toolkit';
import learnReducer from './learnSlice';
import pageReducer from './pageSlice';
import addReducer from './addSlice';
import sentencesReducer from './sentencesSlice';
import tasksReducer from './tasksSlice';
import wordsReducer from './wordsSlice'

const rootReducer = combineReducers({
  learn: learnReducer,
  page: pageReducer,
  add: addReducer,
  sentences: sentencesReducer,
  tasks: tasksReducer,
  words: wordsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
