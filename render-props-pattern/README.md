# Render Props Pattern

- 재사용가능한 컴포넌트를 만드는 방법
- JSX Element를 리턴하는 함수값을 Props로 전달하는 방법이다.
- 컴포넌트는 로직을 수행하는 대신, 단순히 Prop으로 전달된 컴포넌트를 화면에 보여주기만 한다.
- 컴포넌트 내부에서 렌더링 결과물을 반환하다고 하더라도 함수로 호출하는것인지 컴포넌트 형태로 호출하는것인지 잘 파악하고, 그 차이를 인지해서 사용해야 한다.

## Main Concept

```tsx
<Title render={() => <h1>I am a render prop!</h1>} />


const Title = (props) => props.render();
```

- 이름은 renderProps지만 꼭 props로 render를 넘겨줘야 하는건 아니다. render외에 명시적인 이름을 가진 prop을 넘겨줘도 된다.
- 하지만, 일반적으로 이 패턴은 단순히 렌더하는 것에서 끝나지 않는다. 
  - 주로 데이터도 함깨 전달된다.


```tsx
  <Component render={data => <ChildComponent data={data} />} />
```

## 상태를 부모 컴포넌트로 올리기
- 이 방법도 유효하긴 하지만 규모가 큰 앱에서 컴포넌트가 여러 자식 컴포넌트를 가지고 있는 경우 이 작업을 하기란 까다로운 일이다.
- 상태의 변경은 모든 자식 컴포넌트의 리렌더링을 유발할 수 있고 이런 상황이 쌓이체면 앱의 전적인 성능을 떨어트릴 수 있다.

## 개선 Render props
- 그 대신에 render props 패턴을 활용할 수 있다. Input 컴포넌트가 render prop을 받도록 리펙토링 해 보자.

## 자식 컴포넌트를 함수로 받아보자
일반적인 JSX컴포넌트에 자식 엘리먼트로 React 엘리먼트를 반환하는 함수를 전달할 수 있다. 해당 컴포넌트에서 이 함수는 children prop으로 사용 가능하며 이것도 역시 render prop에 해당한다.


## Pros
- 렌더 props 패턴을 사용하면 여러 구성 요소 간에 논리와 데이터를 쉽게 공유할 수 있습니다. 구성 요소는 렌더링 또는 children props을 사용하여 매우 재사용 가능하게 만들 수 있습니다. Higher Order Component 패턴은 주로 재사용성 및 데이터 공유 와 같은 동일한 문제를 해결하지만 렌더링 props 패턴은 HOC 패턴을 사용하여 발생할 수 있는 일부 문제를 해결합니다.

- HOC 패턴을 사용하여 실행할 수 있는 이름 충돌 문제는 렌더링 props 패턴을 사용하여 더 이상 적용되지 않습니다. 자동으로 props을 병합하지 않기 때문입니다. 부모 구성 요소가 제공한 값과 함께 props을 자식 구성 요소에 명시적으로 전달합니다.

- 명시적으로 props를 전달하므로 HOC의 암시적 props 문제를 해결합니다. 요소로 전달되어야 하는 props은 렌더링 props의 인수 목록에 모두 표시됩니다. 이렇게 하면 특정 props이 어디에서 왔는지 정확히 알 수 있습니다.

- 렌더링 props을 통해 앱의 논리를 렌더링 구성 요소와 분리할 수 있습니다. render prop을 받는 stateful 컴포넌트는 단순히 데이터를 렌더링하는 stateless 컴포넌트에 데이터를 전달할 수 있습니다.



## Cons

- The issues that we tried to solve with render props, have largely been replaced by React Hooks. As Hooks changed the way we can add reusability and data sharing to components, they can replace the render props pattern in many cases. (Hooks에 의해 상당부분 대체되었다.)

- Since we can't add lifecycle methods to a render prop, we can only use it on components that don't need to alter the data they receive. (러이프 사이클이 없기 때문에, 데이터를 조작하는 컴포넌트와는 성격이 맞지 않다.)

- Render Props를 사용할때 주의해야할 점은 컴포넌트 렌더링시 함수를 호출하는것과 Component형태로 호출하는것은 엄연히 다른것임을 알아야 한다는것입니다. React 엘리먼트를 반환하다고 하더라도 ‘일반적인 함수호출’은 React 컴포넌트로 인식되지 않습니다. 즉, 컴포넌트의 라이프사이클을 가지지 않으며 React node를 구성하지 않는다는 의미입니다.

- 일반적인 함수호출은 React 엘리먼트만 반환할뿐 자체적으로 라이프사이클과 상태를 가지지 않기때문에 컴포넌트가 될수 없고, React Node를 구성할 수 없습니다. 그렇기때문에 만약 해당 함수에서 Hook을 사용하게 되면 Hook 사용 규칙을 어기게되어 문제가 발생하게 됩니다.


## refer

- [Render Props Pattern](https://www.patterns.dev/posts/render-props-pattern)
- [React Pattern - Render props](https://flowergeoji.me/react/react-pattern-render-props/)
- [Don't call a React function component](https://kentcdodds.com/blog/dont-call-a-react-function-component)