import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProject, deleteProject, selectProject } from './projectsSlice';

const Sidebar = () => {
  const projects = useSelector(state => state.projects.projects);
  const selectedProjectId = useSelector(state => state.projects.selectedProjectId);
  const dispatch = useDispatch();
  const [newProjectName, setNewProjectName] = useState('');

  const handleAddProject = () => {
    if (newProjectName.trim()) {
      dispatch(addProject({ id: Date.now(), name: newProjectName }));
      setNewProjectName('');
    }
  };

  return (
    <div className="w-64 h-full bg-gray-100 p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4">Projeler</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id} className="mb-2 flex justify-between items-center">
            <button
              onClick={() => dispatch(selectProject(project.id))}
              className={`p-2 w-full text-left ${project.id === selectedProjectId ? 'bg-gray-300' : ''}`}
            >
              {project.name}
            </button>
            <button
              onClick={() => dispatch(deleteProject(project.id))}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newProjectName}
        onChange={(e) => setNewProjectName(e.target.value)}
        className="border rounded p-2 mt-4"
        placeholder="Yeni proje ekle"
      />
      <button
        onClick={handleAddProject}
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        Ekle
      </button>
    </div>
  );
};

export default Sidebar;
