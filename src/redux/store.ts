import { configureStore, createSlice } from '@reduxjs/toolkit';

const textAreaSlice = createSlice({
  name: 'textarea',
  initialState: '',
  reducers: {
    change: (_, action) => action.payload,
  },
});

const store = configureStore({
  reducer: textAreaSlice.reducer,
});

const {
  actions: { change },
} = textAreaSlice;

export { change };

export default store;
