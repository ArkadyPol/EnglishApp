import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const editSlice = createSlice({
  name: 'edit',
  initialState: '',
  reducers: {
    change: (_, action: PayloadAction<string>) => action.payload,
  },
});

export const { change } = editSlice.actions;

export default editSlice.reducer;
