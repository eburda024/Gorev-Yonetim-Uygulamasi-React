import { useState, useEffect } from 'react';
import { getDarkModePreference, setDarkModePreference } from './localStorage';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(getDarkModePreference());

  const handleToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    setDarkModePreference(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  useEffect(() => {
    // Sayfa yüklendiğinde karanlık modu kontrol et
    const darkModePreference = getDarkModePreference();
    setIsDarkMode(darkModePreference);
    document.documentElement.classList.toggle('dark', darkModePreference);
  }, []);

  return (
    <div className="flex items-center m-4">
      <span className="mr-2">Karanlık Mod</span>
      <button
        onClick={handleToggle}
        className={`relative inline-block w-12 h-6 transition duration-200 ease-linear rounded-full ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
        }`}
      >
        <span
          className={`absolute left-0  -my-3 w-6 h-6 bg-white border-2 border-gray-300 rounded-full transition-transform duration-100 ease-linear transform ${
            isDarkMode ? 'translate-x-full border-gray-700' : ''
          }`}
        />
      </button>
    </div>
  );
};

export default DarkModeToggle;
