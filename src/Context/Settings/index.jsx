import React from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider({ children }) {

  const [itemsToDisplay, setItemsToDisplay] = React.useState(3);
  const [hideCompleted, setHideCompleted] = React.useState(true);
  const [sort, setSort] = React.useState('dificulty');


  return (
    <SettingsContext.Provider value={{ itemsToDisplay, hideCompleted, sort }}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
