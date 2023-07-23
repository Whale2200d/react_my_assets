import React, { useState } from 'react';
import Timer from './components/Timer';

function UseEffect2() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default UseEffect2;
