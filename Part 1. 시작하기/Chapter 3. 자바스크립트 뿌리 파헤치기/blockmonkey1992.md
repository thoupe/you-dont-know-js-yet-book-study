## 이터레이션 (Iteration)
- 이터레이터 패턴은 컬렉션(순회 가능 한 요소)에 접근하는 표준화된 방법을 제공하는 디자인 패턴.
- 이터레이터 패턴을 사용해 데이터를 덩어리(chunk) 단위로 순회하며 처리.

### 이터러블 (Iterable)이란 ?
- 이터러블 객체는 `반복 가능한 객체`
- `Symbol.iterator` 메서드를 가지고 있는 객체 -> 이터레이터 인스턴스를 반환.

### 이터레이터 (Iterator)
- 이터레이터 는 `next()` 메소드를 가지고 있음, next() 는 리턴값으로 `{ value : any, done : boolean }` 객체를 반환.
- value는 현재 값, done은 종료 여부를 의미.

즉, 이터레이터 소비 프로토콜은 이터러블 객체를 대상으로 하는 것.

### 주요 이터러블 객체
- String
- Array
- Set
- Map

### 이터레이터 예시
```js
// 이터러블한 객체인 Array
const vals = [1, 2, 3];

// 배열을 이터레이터로
const iterator = vals[Symbol.iterator]();

// 이터레이터 소비.
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
console.log(iterator.next()); // { value: undefined, done: true }
```

### 다양한 이터레이터 소비하기
```js
const vals = [1, 2, 3];

// ... Spread Syntax
console.log(...vals); // 1 2 3

// for ... of
for (const [idx, val] of vals) {
  console.log(val); // 1, 2, 3
}

// Spread Syntax in function arg
const testFunc = (...vals) => {
    console.log(...vals); // 1 2 3
}
testFunc(...value);

// entries
for(let [idx, val] of vals.entries()) {
    console.log(`${idx} : ${val}`);
}
// 0 : 1
// 1 : 2
// 2 : 3
```


## 클로저 (Closure)
- 함수가 정의된 스코프가 아닌 다른 스코프에서 함수가 실행되더라도, `스코프 밖에 있는 변수를 기억하고 외부 변수에 계속 접근할 수 있는 경우`를 의미.
- 이를 통해 상태를 유지하거나 은닉할 수 있음.
- 객체는 클로저가 되지 않지만, 함수는 자연스럽게 클로저다.
- 클로저는 자바스크립트 고유의 개념이 아니므로 ECMAScript 명세에 클로저의 정의가 등장하지 않는다.

### Example of clousure
```
// 상위함수 increaseCounter
function increaseCounter() {
    // 이 Count 값이 Garbage Collector의 대상이 되어 삭제될 것(0으로 초기화)이 정상이나, 사라지지 않음.
    let count = 0;

    // 리턴값으로 내부 함수 사용
    return function () {
        count++;
        console.log(count);
    }
}

const counter = increaseCounter();

counter() // 1
counter() // 2
counter() // 3
```

### Lexical Scope
- Scope Chaining : 함수가 정의된 위치부터 변수를 탐색하며 -> 없으면 그 상위 스코프 -> 또 없으면 전역을 탐색하는 방식의 변수 참조 방식을 의미.
- 즉, 함수가 어디에서 호출되었는지가 아니라 `어디에서 정의되었는지에 따라 변수를 참조`하는 범위가 결정.

```js
let globalVariable = 'I am global!'; // 3순위

function outerFunction() {
  let globalVariable = 'I am outside!'; // 2순위

  function innerFunction() {
    let globalVariable = 'I am inside!'; // 1순위
    console.log(globalVariable); // "I am global!"
  }

  return innerFunction;
}

const myFunction = outerFunction();
myFunction();
```

## This
this는 함수의 정의에 종속되어 결정되는 변치 않는 특성이 아니라, `함수를 호출할 때마다 실행 컨텍스트에 의해 결정`되는 동적인 특성을 가진다. 프로토타입 체인에서 위임한 객체에 있는 프로퍼티를 읽어올 때 this가 작성자의 의도대로 가져오게끔 하는데 있다.


## 프로토타입 (Prototype)
- 두 객체 간 Prototype을 통해 연결할 수 있다. (Prototype Chain)
- 클로저, this는 함수의 특성이라면, 프로토타입은 객체 프로퍼티에 접근 시 일어나는 동작과 관련된 특징.
- JS에 클래스가 없던 시절 Prototype을 통해 구현함.

```js
let car = {
    name : "audi"
}

const yourCar = Object.create(car);

console.log(car.name); // audi

// 이 시점에 yourCar은 name 이 없는데, car object의 name을 출력.
console.log(yourCar.name); // audi

// 이 시점에 yourCar에 name 프로퍼티가 추가됨.
yourCar.name = "benz";

console.log(car.name); //audi
console.log(yourCar.name); //benz
```