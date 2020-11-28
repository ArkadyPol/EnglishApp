import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const learnSlice = createSlice({
  name: 'learn',
  initialState: '',
  reducers: {
    change: (_, action: PayloadAction<string>) => action.payload,
  },
});

export const { change } = learnSlice.actions;

export default learnSlice.reducer;
