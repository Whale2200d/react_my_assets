# useState

# 기초 개념

- useState는 state와 setState를 배열 형태로 반환한다.
- state는 현재 값이 들어있고, setState로 state를 변경할 수 있다.
- state가 변경되면 변경된 부분만 화면에 re-rendering된다.

# 알게 된 사실(230721)

1. setState에 인자값에 **callback 함수**를 넣을 수 있다.

- 주로 변경될 새로운 state값이 이전 state 값과 연관되어 있을 때, 사용하면 좋다.

```
  setState((prevState) => {
    // some works...
    return [OOO, ...prevState]
  })
```

2. 초기값을 넣는 자리에 **callback 함수**를 넣을 수 있다.

- 처음에 렌더링될 때, 초기값이 실행될텐데, 이 때 실행될 초기값이 '무거운 작업'이라면, 종종 초기값을 불러올 때마다 '무거운 작업'이 실행된다.
- 이 때, callback 함수를 이용해서 '무거운 작업'을 초기에 한 번만 불러오게 만들 수 있다.

```
  useState(() => {
    return heavyWorks();
  })
```

> 상기 내용은 과도한 re-rendering을 방지하기 위한 **동기적 처리** 방법이다.
