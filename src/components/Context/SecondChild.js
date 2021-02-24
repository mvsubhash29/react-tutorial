import React from 'react';
import {ThemeContext} from './Parent';

export const SecondChild = () => {
  const themeContext = React.useContext(ThemeContext);
  return (
    <h1>Second Child {themeContext}</h1>
  )
}