import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../../api';
import { AppThunk } from '../store';

const editSlice = createSlice({
  name: 'add',
  initialState: '',
  reducers: {
    change: (_, action: PayloadAction<string>) => action.payload,
  },
});

export const { change } = editSlice.actions;

export default editSlice.reducer;

export const send = (): AppThunk => async (dispatch, getState) => {
  const sentence = getState().add.trim();
  dispatch(change(''));
  if (sentence === '') return;
  api.addSentence(sentence);
};
