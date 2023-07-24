import React from 'react';

interface ContentProps {
  isDark: boolean;
}

function Content({ isDark }: ContentProps) {
  return (
    <div
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
      }}
    >
      <p>홍길동님, 좋은 하루 되세요!</p>
    </div>
  );
}

export default Content;
