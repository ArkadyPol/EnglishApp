import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import api from '../../api';

const sentencesSlice = createSlice({
  name: 'sentences',
  initialState: [] as string[],
  reducers: {
    set: (_, action: PayloadAction<string[]>) => action.payload,
  },
});

export const { set } = sentencesSlice.actions;

export default sentencesSlice.reducer;

export const get = (): AppThunk => async (dispatch) => {
  const sentences = await api.getSentences();
  dispatch(set(sentences));
};
