import React from 'react';
import Task from './Task';

const Column = ({ status, tasks, onUpdateStatus, onDeleteTask }) => {
  return (
    <div className="w-1/3 p-4">
      <h2 className="text-xl font-bold mb-4">{status}</h2>
      {tasks.filter(task => task.status === status).map(task => (
        <Task key={task.id} task={task} onUpdateStatus={onUpdateStatus} onDelete={onDeleteTask} />
      ))}
    </div>
  );
};

export default Column;
