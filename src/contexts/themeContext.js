import React, { createContext } from 'react';
import useToggleState from '../hooks/useToggleState';

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [isDark, toggleIsDark] = useToggleState(false);

  return (
    <ThemeContext.Provider value={{ isDark, toggleIsDark }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
