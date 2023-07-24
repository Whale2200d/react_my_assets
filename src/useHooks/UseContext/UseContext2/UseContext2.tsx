import React, { useState } from 'react';
import { ThemeContext } from './Context/ThemeContext';
import { UserContext } from './Context/UserContext';

import Page from '../UseContext2/Page2/Page2';

function UseContext2() {
  const [isDark, setIsDark] = useState(false);
  return (
    <UserContext.Provider value={'사용자'}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default UseContext2;
