# UseRef

# 기초 개념 (useRef로 변수 관리하기)

- 초기값이 current에 저장된다.

# 알게 된 사실(230723)

## useRef와 useState의 차이

- current에 저장된 값을 변화(increase, decrease 등)시킬 수 있지만, 화면에 리렌더링되진 않는다.
- 값이 변할 때마다 리렌더링되는 것은 성능 상 안 좋지 못하기 때문에 성능 최적화를 위해 **useState보다 useRef가 효율적**이다.

## useRef와 variable(변수)의 차이

- 화면을 리렌더링했을 때, useRef의 초기값이 변경된 상태를 유지하지만, 변수는 초기화된다.
- 그 이유는 useRef의 초기화 기준은 리렌더링이 아니라 **mount ~ unmount이 기준**이기 때문에, unmount될 때까지 그 값을 유지한다.

## useRef의 사용성

- useRef는 변화는 감지해야 하지만, 변화가 렌더링을 발생시키면 안되는 값을 다룰 때 편리하다.
- 예를 들어, 렌더링 수를 표현하고 싶을 때, 첫 번째 useState는 리렌더링을 발생시키고, 두 번째 useState로 카운트하는 방식으로 설계해볼 수 있을텐데, 이 경우, **무한 loop**가 된다.

```
  // 무한 loop 발생되는 코드
  const [render, setRender] = useState(1);
  const [countRender, setCountRender] = useState(1);

  useEffect(() => {
    setRenderCount(renderCount + 1)
    console.log('렌더링')
  })

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>render-up</button>
    </div>
  )
```

- 이 경우, useState가 아닌 useRef를 사용하는 것이 좋다.

```
  const [render, setRender] = useState(1);
  const renderCount = useRef(1)

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log('렌더링 수: ', renderCount.current)
  })

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>render-up</button>
    </div>
  )
```

# 기초 개념 (useRef로 DOM 요소에 접근하기)

- `const ref = useRef(value)`로 ref Object인 `{current: value}`를 반환한다.
- 해당 Object를 접근하고자는 요소(div, input 등)의 ref 속성으로 `<input ref={ref}/>`와 같이 넣어주면, 원하는 DOM 요소에 접근할 수 있다.

# 알게 된 사실 (230723)

- 대표적으로 `<input type='text' />`와 같은 input 요소에 focus를 줄 때 많이 사용된다.
- 예를 들어 로그인 페이지가 처음 화면에 보여질 때, ID 입력란을 자동적으로 focus가 되어있게 해주면, **굳이 클릭하지 않아도 바로 ID를 입력할 수 있어 User가 편리**하므로 자주 사용된다.
- 마치, Valina JS에 `Document.querySelector()`와 유사하다.
