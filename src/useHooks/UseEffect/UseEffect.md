# useEffect

# 기초 개념

- Mount, Update, Unmount될 때, 특정 작업을 처리하게 만들고 싶을 때 useEffect Hook을 사용하면 된다.
- useEffect는 기본적으로 callback 함수를 인자로 받는다.
- useEffect는 의존성 배열(dependency array)의 유무에 따라 2가지 형태를 알아야 한다.
  - (의존성 배열이 없을 때) 초기 렌더링 + 리렌더링 모두 동작
  - (의존성 배열이 있을 때) 초기 렌더링 + 배열 내 값이 변경될 때 동작(배열 내 값이 없으면, 초기 렌더링만 동작)

```
useEffect(() => {
    // 원하는 작업 입력...

    useEffect(() => {}) // 1. 모든 렌더링(초기 + 리렌더링)
    useEffect(() => {}, []) // 2. 초기 렌더링
    useEffect(() => {}, [count]) // 3. 초기 + count 리렌더링
    useEffect(() => {}, [name]) // 4. 초기 + name 리렌더링
})
```

# 알게 된 사실 (230721)

- 정리 작업인 Clean Up을 알아야 한다.
- 정리 작업을 하려면 useEffect의 return 값으로 정리 작업 **함수**를 넣어주면 된다.
- 함수를 return하면, **해당 컴포넌트가 unmount될 때** 또는 **다음 렌더링시 불릴 useEffect가 실행되기 전에** return 함수가 실행된다.

```
  useEffect(() => {
    // 예시> 구독...
    return () => {
      // 예시> 구독 해지...
    }
  }, [])
```
