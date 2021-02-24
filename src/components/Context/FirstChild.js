import React from 'react';
import { SecondChild } from './SecondChild'
import { ThemeContext } from './Parent';

export const FirstChild = (props) => {
  const themeContext = React.useContext(ThemeContext);
  return (
    <>
      <h1>First Child</h1>
      <button onClick={() => props.setTheme(themeContext == 'light' ? 'dark' : 'light')}>Theme {themeContext}</button>
      <SecondChild />
    </>
  )
}