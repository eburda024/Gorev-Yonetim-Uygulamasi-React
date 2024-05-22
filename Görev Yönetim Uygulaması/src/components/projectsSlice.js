import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
  projects: [
    { id: 1, name: 'Proje 1' },
    { id: 2, name: 'Proje 2' },
  ],
  selectedProjectId: 1,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(project => project.id !== action.payload);
      if (state.selectedProjectId === action.payload) {
        state.selectedProjectId = state.projects.length ? state.projects[0].id : null;
      }
    },
    selectProject: (state, action) => {
      state.selectedProjectId = action.payload;
    },
  },
});

export const { addProject, deleteProject, selectProject } = projectsSlice.actions;
export default projectsSlice.reducer;


export const deleteProjectIfAllTasksCompleted = (projectId) => (dispatch, getState) => {
  const { tasks } = getState().tasks;
  const projectTasks = tasks.filter(task => task.projectId === projectId);

  if (projectTasks.every(task => task.status === 'Tamamlandı')) {
    dispatch(deleteProject(projectId));
  } else {
    alert('Projeyi silmek için tüm görevlerin tamamlanmış olması gerekiyor.');
  }
};
