# useContext

# 기초 개념

## 필요 배경

- React로 만든 앱은 여러 개의 Component로 구성되어 있고, 최상위 App Component부터 시작해서 Tree 형태로 구성된다.
- React에서 일반적인 데이터 흐름은 Props를 이용해 부모 Component(위)에서 자식 Component(아래)로 흐른다.
- 이러한 방식은 간단하지만, 전역에서 필요한 data의 경우, 계속해서 부모와 자식 Component에 Props를 작성해야 한다는 단점이 존재한다.
  - 예를 들어, Global Data로 **User data(로그인 데이터), Theme, Language** 등이 전역에서 필요하다고 볼 수 있다.
- 만약, 마지막 자식이 Data가 필요하다면 최상위 Component에서 받은 데이터는 마지막 자식 Component에 도달할 때까지 중간 Component를 거쳐야 한다. 이처럼 Props를 이용해 단계적으로 전달하는 과정을 **Prop Drilling**이라 한다.

## Context API 개념

- Context API는 App 안에서 전역으로 사용되는 데이터를 여러 컴포넌트끼리 쉽게 공유할 수 있는 방법이다.
  > Props를 일일히 사용하지 않아도 된다.

# 알게 된 사실(230724)

- Context API의 장점

  - 장점 1 : 중간 Component에 불필요한 코드를 작성하지 않아도 된다.
  - 장점 2 : Drilling 과정에서 전달하고자는 데이터를 수정해버리면, 자식 Component부터 부모 Component들을 일일히 찾아서 수정해야되는 단점이 있다. Component가 많아질수록 문제가 커지기 때문에 이러한 문제를 미연에 방지할 수 있다.

- Context의 단점(그럼에도 Props가 필요한 이유)

  - Context는 꼭 필요한 순간에 사용하는 것이 좋다.
  - Context를 사용하면 컴포넌트를 **재사용하기 어려울 수 있다**.
  - Context의 주된 목적은 다양한 레벨에 있는 Component들에게 **전역 데이터를 전달하기 위함**이다.
    > 만약 목적이 Prop Drilling을 피하기 위한 목적이라면 **Component Composition(컴포넌트 합성)**을 먼저 고려하는 것이 좋다.

- `createContext('초기값')`에 들어가는 초기값은 Provider로 Context를 적용할 최상위 부모 컴포넌트를 감싸지 않았을 때, 표현되는 값이다.
  - Provider로 감싸지 않은 상태에서 자식 컴포넌트에 `const data = useContext(ThemeContext)`를 입력하고 console.log를 적용하면, `초기값`이 콘솔창에 뜨는 것을 볼 수 있다.
  - Provider로 감싸지 않으면, value가 없다는 뜻이므로, **인자로 초기값을 받아오기 때문**이다.
