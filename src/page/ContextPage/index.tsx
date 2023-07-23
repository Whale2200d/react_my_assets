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
        <br />
        <h1>useHooks</h1>
        <Link to="usestate1">1-1. useState1</Link>
        <Link to="usestate2">1-2. useState2</Link>
        <Link to="useeffect1">2-1. useEffect1</Link>
        <Link to="useeffect2">2-2. useEffect2</Link>
        <Link to="useref1">3-1. useRef1</Link>
        <Link to="useref2">3-2. useRef2</Link>
        <Link to="useref3">3-3. useRef3</Link>
      </S.Container>
    </>
  );
}

export default ContextPage;
