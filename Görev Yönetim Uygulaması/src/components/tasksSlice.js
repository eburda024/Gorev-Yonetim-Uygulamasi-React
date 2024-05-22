import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, content: 'Yunus', status: 'Yapılacak', projectId: 1 },
    { id: 2, content: 'Emre', status: 'Yapılıyor', projectId: 1 },
    { id: 3, content: 'Kökboyu', status: 'Tamamlandı', projectId: 1 },
    { id: 4, content: 'mbp-214', status: 'Yapılacak', projectId: 2 },
    { id: 5, content: 'İnternet Programming', status: 'Yapılıyor', projectId: 2 },
    { id: 6, content: 'Kanban To-do List', status: 'Tamamlandı', projectId: 2 },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.status = status;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTaskStatus, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
