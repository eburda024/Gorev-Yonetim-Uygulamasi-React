export const getDarkModePreference = () => {
    return localStorage.getItem('darkMode') === 'enabled';
  };
  
  export const setDarkModePreference = (enabled) => {
    localStorage.setItem('darkMode', enabled ? 'enabled' : 'disabled');
  };
  