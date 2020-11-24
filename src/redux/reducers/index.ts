import { combineReducers } from 'redux';
import textAreaReducer from './textAreaSlice';

const rootReducer = combineReducers({
  textarea: textAreaReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
