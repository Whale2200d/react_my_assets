import React from 'react';
import Header from './Header1/Header1';
import Content from './Content1/Content1';
import Footer from './Footer1/Footer1';

interface PageProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>; // setState를 Props로 넘길 때, setState의 type
}

function Page({ isDark, setIsDark }: PageProps) {
  return (
    <div>
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default Page;
