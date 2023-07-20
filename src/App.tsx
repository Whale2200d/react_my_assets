import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ContextPage from './page/ContextPage';
import DataPost from './components/DataCRUD/DataPost/DataPost';
// import Chat from './components/Chat/Chat';
import ButtonRendering from './components/ButtonRendering';
import UserParameters from './components/UseParameters';
import DataChildToParent from './components/DataChildToParent/Parent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContextPage />} />
        <Route path="/post" element={<DataPost />} />
        {/* <Route path="/chat" element={<Chat />} /> */}
        <Route path="/buttonrendering" element={<ButtonRendering />} />
        <Route path="/useparameter" element={<UserParameters />} />
        <Route path="/datachildtoparent" element={<DataChildToParent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
