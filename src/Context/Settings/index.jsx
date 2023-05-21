import React, { useState, useContext, createContext, useEffect } from 'react';

export const SettingsContext = createContext();

export function useSettings() {
  return useContext(SettingsContext);
}

function SettingsProvider({ children }) {
  const initialSettings = JSON.parse(localStorage.getItem('settings')) || {
    itemsToDisplay: 3,
    showCompleted: false,  // make sure showCompleted is always defined
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
    console.log(settings);  // Debug line to print settings whenever they change
    localStorage.setItem('settings', JSON.stringify(settings));
  }, [settings]);


  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
