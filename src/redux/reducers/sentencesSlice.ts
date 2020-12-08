import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import api from '../../api';
import { Sentence } from '../../types';

const sentencesSlice = createSlice({
  name: 'sentences',
  initialState: [] as Sentence[],
  reducers: {
    set: (_, action: PayloadAction<Sentence[]>) => action.payload,
  },
});

export const { set } = sentencesSlice.actions;

export default sentencesSlice.reducer;

export const get = (): AppThunk => async (dispatch) => {
  const sentences = await api.getSentences();
  dispatch(set(sentences));
};
