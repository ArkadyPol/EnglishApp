import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import api from '../../api';
import { Word } from '../../types';

const wordsSlice = createSlice({
  name: 'words',
  initialState: [] as Word[],
  reducers: {
    set: (_, action: PayloadAction<Word[]>) => action.payload,
  },
});

export const { set } = wordsSlice.actions;

export default wordsSlice.reducer;

export const get = (): AppThunk => async (dispatch) => {
  const words = await api.getWords();
  dispatch(set(words));
};
