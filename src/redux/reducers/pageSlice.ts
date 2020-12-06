import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Page } from '../../types';

const pageSlice = createSlice({
  name: 'page',
  initialState: 'learn' as Page,
  reducers: {
    change: (_, action: PayloadAction<Page>) => action.payload,
  },
});

export const { change } = pageSlice.actions;

export default pageSlice.reducer;
