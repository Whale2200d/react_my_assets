import React from 'react';

interface FooterProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}
function Footer({ isDark, setIsDark }: FooterProps) {
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <footer
      style={{
        backgroundColor: isDark ? 'black' : 'white',
      }}
    >
      <button onClick={toggleTheme}>Dark Mode</button>
    </footer>
  );
}

export default Footer;
