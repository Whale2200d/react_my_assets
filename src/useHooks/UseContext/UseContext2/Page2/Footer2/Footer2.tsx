import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

function Footer2() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <footer
      style={{
        backgroundColor: isDark ? 'black' : 'white',
      }}
    >
      <button onClick={toggleTheme}>Dark Mode</button>
    </footer>
  );
}

export default Footer2;
