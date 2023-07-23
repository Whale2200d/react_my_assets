import React, { useState } from 'react';

const heavyWork = () => {
  console.log('엄청 무거운 작업!');
  return ['홍길동', '김민수'];
};

function UseState2() {
  const [addNames, setAddNames] = useState(() => {
    // 무거운 작업은 초기에만 렌더링하면 되므로,
    // callback 함수로 heavyWork() 함수를 불러온다.
    return heavyWork();
  });
  const [input, setInput] = useState('');

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setAddNames((prevState) => {
      return [input, ...prevState];
    });
  };

  return (
    <>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {addNames.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
    </>
  );
}

export default UseState2;
