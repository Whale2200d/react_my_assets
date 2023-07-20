import { Link } from 'react-router-dom';
import * as S from './styles';

function ContextPage() {
  return (
    <>
      <S.Container>
        <h1>Context</h1>
        <Link to="post">1. DataPost</Link>
        <Link to="chat">2. Chat</Link>
        <Link to="buttonrendering">3. ButtonRendering</Link>
        <Link to="useparameter">4. UseParameters</Link>
        <Link to="datachildtoparent">5. DataChildToParent</Link>
      </S.Container>
    </>
  );
}

export default ContextPage;
