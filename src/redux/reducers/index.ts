import { combineReducers } from 'redux';
import learnReducer from './learnSlice';
import pageReducer from './pageSlice';
import editReducer from './editSlice';

const rootReducer = combineReducers({
  learn: learnReducer,
  page: pageReducer,
  edit: editReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
