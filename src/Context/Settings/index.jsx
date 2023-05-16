import React, { useState, useContext, createContext, useEffect } from 'react';

export const SettingsContext = createContext();

export function useSettings() {
  return useContext(SettingsContext);
}

function SettingsProvider({ children }) {
  const initialSettings = JSON.parse(localStorage.getItem('settings')) || {
    itemsToDisplay: 3,
    hideCompleted: true,
    sort: 'difficulty',
  };
  
  const [settings, setSettings] = useState(initialSettings);

  const updateSettings = (newSettings) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      ...newSettings,
    }));
  };

  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(settings));
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
