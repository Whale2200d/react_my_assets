import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ContextPage from './page/ContextPage';
import DataPost from './components/DataCRUD/DataPost/DataPost';
// import Chat from './components/Chat/Chat';
import ButtonRendering from './components/ButtonRendering';
// import UserParameters from './components/UseParameters';
import DataChildToParent from './components/DataChildToParent/Parent';
import UseState1 from './useHooks/UseState/UseState1';
import UseState2 from './useHooks/UseState/UseState2';
import UseEffect1 from './useHooks/UseEffect/UseEffect1';
import UseEffect2 from './useHooks/UseEffect/UseEffect2';
import UseRef1 from './useHooks/UseRef/UseRef1';
import UseRef2 from './useHooks/UseRef/UseRef2';
import UseRef3 from './useHooks/UseRef/UseRef3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContextPage />} />
        <Route path="/post" element={<DataPost />} />
        {/* <Route path="/chat" element={<Chat />} /> */}
        <Route path="/buttonrendering" element={<ButtonRendering />} />
        {/* <Route path="/useparameter" element={<UserParameters />} /> */}
        <Route path="/datachildtoparent" element={<DataChildToParent />} />
        <Route path="/usestate1" element={<UseState1 />} />
        <Route path="/usestate2" element={<UseState2 />} />
        <Route path="/useeffect1" element={<UseEffect1 />} />
        <Route path="/useeffect2" element={<UseEffect2 />} />
        <Route path="/useref1" element={<UseRef1 />} />
        <Route path="/useref2" element={<UseRef2 />} />
        <Route path="/useref3" element={<UseRef3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
