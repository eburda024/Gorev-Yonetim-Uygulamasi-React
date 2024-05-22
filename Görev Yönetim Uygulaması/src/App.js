import React from 'react';
import { useSelector } from 'react-redux';
import KanbanBoard from './components/KanbanBoard';
import AddTaskForm from './components/AddTaskForm';
import Sidebar from './components/Sidebar';
import DarkModeToggle from './components/DarkModeToggle';
import { getDarkModePreference, setDarkModePreference } from './components/localStorage';
import './input.css'

function App() {
  const selectedProjectId = useSelector(state => state.projects.selectedProjectId);
  
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-4">Görev Yönetim Uygulaması</h1>
        <DarkModeToggle />
        {selectedProjectId && (
          <>
            <AddTaskForm />
            <KanbanBoard />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
