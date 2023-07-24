import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

import Header from './Header2/Header2';
import Content from './Content2/Content2';
import Footer from './Footer2/Footer2';

function Page2() {
  const data = useContext(ThemeContext);
  console.log('data: ', data);

  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Page2;
