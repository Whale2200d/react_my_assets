import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { UserContext } from '../../Context/UserContext';

function Header2() {
  const { isDark } = useContext(ThemeContext);
  // console.log('isDark: ', isDark)
  const user = useContext(UserContext);

  return (
    <header
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black',
      }}
    >
      <h1>Welcome {user}!</h1>
    </header>
  );
}

export default Header2;
