import { createSlice } from '@reduxjs/toolkit';

import { TaskItem } from '@/constants/types';

export const tasks = createSlice({
  name: 'tasks',
  initialState: { currentName: '', currentDescription: '', tasks: [] as TaskItem[] },
  reducers: {
    saveName: (state, action) => {
      state.currentName = action.payload;
    },
    saveDescription: (state, action) => {
      state.currentDescription = action.payload;
    },
    saveTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { saveName, saveDescription, saveTasks } = tasks.actions;
export default tasks.reducer;
