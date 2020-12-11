import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import api from '../../api';
import { Task } from '../../types';

const initialState = {
  tasks: [] as Task[],
  page: 1,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    loadTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks.push(...action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { loadTasks, setPage } = tasksSlice.actions;

export default tasksSlice.reducer;

export const get = (): AppThunk => async (dispatch, getState) => {
  const page = getState().tasks.page;
  const tasks = await api.getTasks(page);
  if (tasks.length) {
    dispatch(loadTasks(tasks));
    dispatch(setPage(page + 1));
  }
};
