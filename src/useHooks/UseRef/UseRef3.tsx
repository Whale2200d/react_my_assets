import React, { useEffect, useRef } from 'react';

function UseRef3() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // console.log(inputRef);
    inputRef.current && inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다! ${inputRef.current && inputRef.current.value}`);
    inputRef.current && inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default UseRef3;
