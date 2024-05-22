import React from 'react';

const Task = ({ task, onUpdateStatus, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <p>{task.content}</p>
      <div className="mt-2 flex justify-between items-center">
        <select
          value={task.status}
          onChange={(e) => onUpdateStatus(task.id, e.target.value)}
          className="border rounded p-1"
        >
          <option value="Yapılacak">Yapılacak</option>
          <option value="Yapılıyor">Yapılıyor</option>
          <option value="Tamamlandı">Tamamlandı</option>
        </select>
        <button 
          onClick={() => onDelete(task.id)}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          Sil
        </button>
      </div>
    </div>
  );
};

export default Task;
