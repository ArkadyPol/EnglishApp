import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './reducers';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
