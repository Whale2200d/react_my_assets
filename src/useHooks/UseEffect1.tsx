import React, { useEffect, useState } from 'react';

function UseEffect1() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e: any) => {
    setName(e.target.value);
  };

  // 렌더링될 때마다 매번 실행된다.
  useEffect(() => {
    console.log('렌더링!!!');
  });
  // count가 렌더링될 때마다 실행된다.
  useEffect(() => {
    console.log('count 렌더링!!!');
  }, [count]);
  // name이 렌더링될 때마다 실행된다.
  useEffect(() => {
    console.log('name 렌더링!!!');
  }, [name]);

  return (
    <>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <br />
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>
    </>
  );
}

export default UseEffect1;
