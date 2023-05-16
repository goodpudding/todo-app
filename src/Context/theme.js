import React from "react";

export const ThemeContext = React.createContext();

function ThemeProvider(props){
  const [mode, setMode] = React.useState('dark')

  return(
    <ThemeContext.Provider value ={{ mode }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;