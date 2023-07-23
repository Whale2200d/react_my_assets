import React, { useRef, useState } from 'react';

function UseRef() {
  // useState와 useRef와 variable(변수) 차이 비교
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log('ref: ', countRef.current);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log('var: ', countVar);
  };

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      {/* useState는 누를 때마다 값도 바뀌고 화면에 리렌더링된다. 비효율적이다. */}
      <button onClick={increaseCountState}>State 올려</button>
      {/* useRef는 누를 때 값만 바뀌고, 화면에 리렌더링되진 않는다. 효율적이다. */}
      <button onClick={increaseCountRef}>Ref 올려</button>
      {/*  */}
      <button onClick={increaseVar}>Ref Var 값 출력</button>
    </div>
  );
}

export default UseRef;
