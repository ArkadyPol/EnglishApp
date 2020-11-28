import { combineReducers } from 'redux';
import learnReducer from './learnSlice';
import pageReducer from './pageSlice';

const rootReducer = combineReducers({
  learn: learnReducer,
  page: pageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
