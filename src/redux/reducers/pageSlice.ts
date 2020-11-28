import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: 'learn',
  reducers: {
    change: (_, action: PayloadAction<string>) => action.payload,
  },
});

export const { change } = pageSlice.actions;

export default pageSlice.reducer;
