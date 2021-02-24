import React from 'react';
import {FirstChild} from './FirstChild'

export const ThemeContext = React.createContext('light');

export const Parent = () => {
  const [theme, setTheme] = React.useState('dark');


  return (
    <ThemeContext.Provider value={theme}>
      <h1>Parent component</h1>
      
      <FirstChild setTheme={setTheme} />
    </ThemeContext.Provider>
  )
}