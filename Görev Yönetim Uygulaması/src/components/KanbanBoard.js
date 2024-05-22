import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTaskStatus, deleteTask } from './tasksSlice';
import Column from './Column';

const KanbanBoard = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const selectedProjectId = useSelector(state => state.projects.selectedProjectId);
  const dispatch = useDispatch();

  const handleUpdateStatus = (id, status) => {
    dispatch(updateTaskStatus({ id, status }));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const filteredTasks = tasks.filter(task => task.projectId === selectedProjectId);

  return (
    <div className="flex">
      {['Yapılacak', 'Yapılıyor', 'Tamamlandı'].map(status => (
        <Column
          key={status}
          status={status}
          tasks={filteredTasks.filter(task => task.status === status)}
          onUpdateStatus={handleUpdateStatus}
          onDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
