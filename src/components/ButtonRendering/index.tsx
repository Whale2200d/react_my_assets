import React, { useEffect, useState } from 'react';
import ChildComponent from './ChildComponent';

function ButtonRendering() {
  const [isCompleteText, setIsCompleteText] = useState('SHARING');
  const [isRendering, setIsRendering] = useState(false);

  const showPosts = {
    status: 'SHARING',
  };
  const renderingPage = async () => {
    setIsRendering(true);
  };

  useEffect(() => {
    renderingPage();
  }, []);

  const onClickButtonHandler = async (status: string) => {
    showPosts.status = status;
    console.log('showPosts.status : ', showPosts.status);
    setIsCompleteText(showPosts.status);
  };

  const changeText = isCompleteText === 'SHARING' ? 'SHARING' : 'COMPLETE';

  return (
    <>
      {isRendering && <ChildComponent status={changeText} />}
      <button onClick={() => onClickButtonHandler('COMPLETE')}>나눔완료</button>
    </>
  );
}

export default ButtonRendering;
