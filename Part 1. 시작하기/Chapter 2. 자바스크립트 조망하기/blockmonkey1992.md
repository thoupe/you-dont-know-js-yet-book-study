## 값
### 원시타입 (Primitive Type)
- String:
    - 문자열을 나타내는 타입.
    - 백틱을 사용해 보간 표현식 사용 가능. 그 외 사용 권장하지 아니함.
- Number: 
    - 숫자를 나타내는 타입. 정수와 부동 소수점을 모두 포함.
- Boolean: 
    - 논리적 참(true) 또는 거짓(false)을 나타내는 타입.
- Undefined: 
    - 값이 할당되지 않은 변수의 타입.
- Null: 
    - 의도적으로 값이 비어 있음을 나타내는 타입.
- Symbol: 
    - 유일하고 변경 불가능한 값으로 객체의 고유한 프로퍼티 키를 만들 때 사용.
- BigInt: 
    - 안전한 정수 범위를 넘어서는 큰 정수를 나타내는 타입.
    - 최대 안전 정수 : 9007199254740991 (2^53)
    - 최소 안전 정수 : -9007199254740991 (-2^53)

### 객체타입 (Object Type)
- Object: 
    - 키-값 쌍의 집합으로, 다양한 형태의 데이터를 저장.
- Array: 
    - 특수 유형 객체.
    - 순서가 있는 리스트 형태로, 인덱스로 접근할 수 있는 값의 집합.
- Function: 
    - 함수는 객체의 일종으로, 호출할 수 있는 코드 블록.
    - 한 번 이상 호출 가능하며, 입력값과 하나 이상의 출력값을 가질 수 있음.
    - 할당 가능하고 어디든 전달 가능한 값으로 취급됨. (일급함수 & 고차함수 특성)

## Null or undefined Handling
JS에서 Null, Undefined 등 의 핸들링과, False의 기준의 명확한 구분을 하고 어떻게 핸들링 하는지 알아본다.

### JS에서 False로 판단되는 기준
아래 내용 Javascript에서 false로 판단된다.
- false
- 0
- -0
- 0n (BigInt)
- "" (빈 문자열)
- null
- undefined
- NaN

### 널 병합 연산자 (Nullish Coalescing Operator)
null Type or undefined인 경우 기본값을 제공할 수 있음.
```
let value = null;
let defaultValue = value ?? "default";
console.log(defaultValue); // "default"
```

## 비교 (==, ===)
JS에서 값의 같음을 비교할 때, `==`, `===` 등을 사용하는데, 명확한 차이를 구분하고 적시 적소에 사용할 수 있도록 한다.

- === 연산자만으로는 값의 명확한 비교가 가능하나, 모든 대상에 대해 비교할 수 없음.
- == 타입 비교를 하지 아니하는 것이 아닌, 강제로 타입을 변환하고 비교연산한다는 점에서 `강제 변환 동등 비교 연산자`라고 표현.
- `NaN 또는 Object Type 의 경우, === 연산자로 비교 할 수 없`다.
    - NaN의 경우 `Number.isNaN()` 또는 `Object.is()` 을 통해 비교연산이 가능.
    ```js
    // NaN 비교
    console.log(Object.is(NaN, NaN)); // true
    console.log(NaN === NaN); // false
    ```
    - Object Type 비교는 `순회하여 각각의 값을 비교`.

## 코드 구조화 패턴 Class & Module
행동관점에서 코드를 구조화하는 패턴은 크게 `클래스(Class)`와 `모듈(Module)` 방식.
두 패턴은 상호 배타적인 패턴방식이 아니라 공존할 수 있음.

### 클래스
Data, Method를 행동 단위별로 묶어 객체를 생성. 이를 `상속`과 `다형성`의 특성을 통해 재사용이 가능하고, `캡슐화`를 통해 데이터와 메소드를 보호할 수 있다. `this를 통해 인스턴스에 접근`이 가능하다는 특성을 가짐.

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const alice = new Person('Alice', 30);
alice.greet(); // "Hello, my name is Alice"
```

### 모듈
코드의 재사용과 관리를 쉽게 하기 위해 관련된 코드를 하나의 단위로 묶는 방식으로 `래핑 함수(Wrapping Function)가 없다`는 점과 `this를 사용하지 않는다`는 점에서 Class와 차이점을 가진다.

```
// math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// main.js
import { add, subtract } from './math.js';

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
```

