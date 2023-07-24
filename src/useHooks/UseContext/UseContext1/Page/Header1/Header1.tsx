import React from 'react';

interface HeaderProps {
  isDark: boolean;
}

function Header({ isDark }: HeaderProps) {
  return (
    <header
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black',
      }}
    >
      <h1>Welcome 홍길동!</h1>
    </header>
  );
}

export default Header;
