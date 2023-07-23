import React, { useEffect } from 'react';

function Timer() {
  useEffect(() => {
    // 가장 처음 렌더링(mount)되었을 때 실행할 함수
    const timer = setInterval(() => {
      console.log('타이머 돌아가는 중...');
    }, 1000);

    // 정리 작업(Clean up)해주는 함수
    // unmount되었을 때 실행할 함수를 return 함수로 작성한다.
    return () => {
      clearInterval(timer);
      console.log('타이머가 종료되었습니다!');
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔 창을 보세요</span>
    </div>
  );
}

export default Timer;
