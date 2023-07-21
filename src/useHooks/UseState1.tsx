import React, { useState } from 'react';

function UseState1() {
  const [showTime, setShowTime] = useState(1);

  const handleUpdateButton = () => {
    let newShowTime;
    if (showTime >= 24) {
      // showTime = 1; // 상수는 state에 할당할 수 없다.
      newShowTime = 1; // 2. 24시가 넘으면 1시로 초기화
    } else {
      newShowTime = showTime + 1;
    }
    setShowTime(newShowTime); // 1. 현재 값에 +1 추가
  };

  return (
    <>
      <span>현재 시간 : {showTime}시</span>
      <button onClick={handleUpdateButton}>Update</button>
    </>
  );
}

export default UseState1;
