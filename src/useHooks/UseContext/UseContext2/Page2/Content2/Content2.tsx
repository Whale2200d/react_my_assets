import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { UserContext } from '../../Context/UserContext';

function Content2() {
  const { isDark } = useContext(ThemeContext);
  // console.log('isDark: ', isDark);
  const user = useContext(UserContext);

  return (
    <div
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
      }}
    >
      <p>{user}님, 좋은 하루 되세요!</p>
    </div>
  );
}

export default Content2;
