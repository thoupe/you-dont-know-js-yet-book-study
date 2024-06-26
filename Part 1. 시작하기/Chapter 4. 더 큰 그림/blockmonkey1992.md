## 스코프와 클로저
### 스코프
- Scope는 중첩하여 존재할 수 있는데, `안쪽에서는 바깥쪽 변수에 접근할 수 있고 바깥 쪽에서는 안쪽 변수에 접근할 수 없다.` 이러한 특성을 `렉시컬 스코프(Lexical Scope)`라 한다.

### 호이스팅
- 블록 내 선언한 변수가 전역 맨 위에 선언한 변수처럼 처리되는 것을 호이스팅이라 한다.

### var
- var는 `함수 기준의 블록 스코프`를 가짐.
- JS를 처음 배우면 var는 옛날 문법이라 쓰지 말라하는데, var let const 각각에 특성에 맞추어 적시 적소에 사용하는 것을 권장.

### 클로저
바깥 스코프에 있는 변수를 참조하는 함수가 있고, 이 함수가 변수를 통해 별개의 스코프에서 실행될 때, 함수는 함수가 정의된 스코프를 기준으로 변수를 참조하는 것을 `클로저` 라 함.


## 프로토타입
- 객체는 객체로서 두고, 프로토타입 체인을 통해 객체간 협력하도록 하는 접근법을 `작동위임패턴` 이라 하는데, 코드의 동작과 데이터를 구조화하는데 있어 JS 스럽고 강력하다고 판단.

## 기타
- 정적타입을 사용하는 것보다 JS에서 타입이 어떻게 동작하는지 잘 알고 사용하는 것이 더 유리하다.
- 즉 JS는 `동적타입언어`.
- 이 책의 구성은, `1권 ‘시작하기’ → 2권 ‘스코프와 클로저’ → 3권 ‘객체와 클래스’ → 4권 ‘타입과 문법’ → 5권 ‘동기와 비동기’ → 6권 ‘ES.Next와 그 너머’` 로 구성.
