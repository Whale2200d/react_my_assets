import React, { useState } from 'react';
import Page from './Page/Page1';

function UseContext1() {
  const [isDark, setIsDark] = useState(false);
  return <Page isDark={isDark} setIsDark={setIsDark} />;
}

export default UseContext1;
