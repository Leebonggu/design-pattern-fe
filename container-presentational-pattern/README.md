# Container/Presentational Pattern

- Enforce separation of concerns by separating the view from the application logic
- 애플리케이션 로직에서 뷰를 분리하여 관심사 분리

## Main Concept

- 이상적으로. 각 절차를 2개의 부분으로 분리함으로 관심사 분리를 하기 원한다.

###  1. Presentational Components

유저에게 데이터가 어떻게 보여야 하는지 관리하는 컴포넌트이다. 예를들어, 사진 목록을 렌더링하는 것이 있다.

###  2. Container Components

유저에게 보여지는 데이터를 관리하는 컴포넌트이다. 예를들어, 사진을 페팅하는 것이 있다.


## Presentational Component 

- Presentational Component는 데이터를 props로 받는다. 
- 주요 기능은 단순히 받은 데이터를 추가적인 조작없이 유저가 원하는 방식으로 보여주는 것이다. 


## Container Components

- Container Components는 데이터를 가지고  Presentational Component로 넘겨주는 역할을 한다.
- 자신이 가진 데이터를 다루는  Presentational Component외에 다른 컴포넌트는 렌더링하지 않는다.
- 스스로는 어떤것도 렌더링하지 않으며, 어떤 스타일 요소도 가지고 있지 않다.

## Hooks

- 그러나 hooks가 생기면서, 더이상 데이터 패칭을 위한 Container Component가 필요하지 않개 되었다.
- Presentational Component에도 데이터 페칭을 위한 부분이 들어갈 수 있게 되었다(custom hooks)
- Hooks는 컴포넌트에서 로직과 뷰를 쉽게 분리할 수 있게 한다.

## 찬/반 논쟁

### 찬성

- 관심사 분리에 도움이 된다.
- 각 컴포넌트가 앱의 UI와 앱 상태/데이터에만 집중할 수 있는 구조이다.
- Presentational components는 데이터만 바꿔넣으면 되기때문에 쉽게 재사용 가능하다.
- Presentational components는 앱 전체 로직을 변경하지 않기 때문에 코드베이스에 대한 지식이 없는 사람도, UI 변경에 도움을 줄 수 있다.
- 순수 함수이기 때문에 테스트하기 쉽다. 
- 순수하게 데이터만 넘겨주기 때문에 별다른 모킹이 필요없이 테스트 가능하다.

### 반대

- Hooks의 등장으로 컴포넌트 분리없이 관심사 분리가 가능해졌다.
- 최근 리액트 생태계에서는 클래스 컴포넌트를 거의 사용하지 않는다.
- 여전히 패턴을 사용할 수 있지만, Hooks를 사용하는것에 비해 앱의 사이즈가 비대해질 수 있다.

## refer

- [Container/Presentational Pattern](https://www.patterns.dev/posts/presentational-container-pattern/)