import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import api from '../../api';
import { Task } from '../../types';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {
    set: (_, action: PayloadAction<Task[]>) => action.payload,
  },
});

export const { set } = tasksSlice.actions;

export default tasksSlice.reducer;

export const get = (): AppThunk => async (dispatch) => {
  const tasks = await api.getTasks();
  dispatch(set(tasks));
};
