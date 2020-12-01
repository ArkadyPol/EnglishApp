import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../../api';
import { AppThunk } from '../store';

const editSlice = createSlice({
  name: 'edit',
  initialState: '',
  reducers: {
    change: (_, action: PayloadAction<string>) => action.payload,
  },
});

export const { change } = editSlice.actions;

export default editSlice.reducer;

export const send = (): AppThunk => async (dispatch, getState) => {
  let sentence = getState().edit;
  api.addSentence(sentence);
  dispatch(change(''));
};
