import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const textAreaSlice = createSlice({
  name: 'textarea',
  initialState: '',
  reducers: {
    change: (_, action: PayloadAction<string>) => action.payload,
  },
});

export const { change } = textAreaSlice.actions;

export default textAreaSlice.reducer;
