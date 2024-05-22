import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './tasksSlice';

const AddTaskForm = () => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const selectedProjectId = useSelector(state => state.projects.selectedProjectId);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      dispatch(addTask({ id: Date.now(), content, status: 'Yapılacak', projectId: selectedProjectId }));
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border rounded p-2 w-full"
        placeholder="Yeni görev ekle"
      />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
        Ekle
      </button>
    </form>
  );
};

export default AddTaskForm;
