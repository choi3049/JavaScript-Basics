// 일반 함수
let normalFunc = function (x) {
  console.log(x);
};

// 람다식 함수
let arrowFunc = (y) => {
  console.log(y);
};

normalFunc("일반 함수");
arrowFunc("람다식 함수");

//람다식은 함수(function)를 하나의 식으로 표현한 것이며, 함수를 람다식으로 표현하면
//메서드의 이름이 필요 없기 때문에, 이름이 없다는 말 뜻 자체로 익명 함수의 한 종류라고
//볼 수 있습니다.

//일반 함수 this 예제
param = "global param";

function printParam() {
  console.log(this.param);
}

let object = {
  param: "object param",
  func: printParam,
};
let object2 = {
  param: "object2 param",
  func: printParam,
};

object.func();
object2.func();

//람다식 함수 this 예제
param = "global param";

let printParam = () => {
  console.log(this.param);
};

let object3 = {
  param: "object3 param",
  func: printParam,
};
let object4 = {
  param: "object4 param",
  func: printParam,
};

object.func();
object2.func();

//일반 함수에서 람다식으로 값을 변경했을때 결과 값이 달라진 이유는, 람다식 함수로 선언한 함수는, 선언한 시점에서 this를 확보해버립니다.
//람다식은 this값을 고정해버림.

let sum = (a, b) => a + b;
/* 위 화살표 함수는 아래 함수의 축약 버전이다.
 
let sum = function(a, b) {
  return a + b;
};
 
*/

// 매개변수 지정 방법
//     () => { ... } // 매개변수가 없을 경우
//      x => { ... } // 매개변수가 한 개인 경우, 소괄호를 생략할 수 있다.
// (x, y) => { ... } // 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다.
//
// // 함수 몸체 지정 방법
// x => { return x * x }  // single line block
// x => x * x   // 함수 몸체가 한줄 구문이면 중괄호를 생략할 수 있으며 암묵적으로 return된다.
//
// () => { return { a: 1 }; }
// () => ({ a: 1 })  // 위 표현과 동일하다. 객체 반환시 소괄호를 사용한다.
//
// () => {           // multi line block.
//   const x = 10;
//   return x * x;
// };

// ES5
// var arr = [1, 2, 3];
// var pow = arr.map(function (x) { // x는 요소값
//     return x * x;
// });
//
// console.log(pow); // [ 1, 4, 9 ]

// // ES6
// const arr = [1, 2, 3];
// const pow = arr.map(x => x * x);
//
// console.log(pow); // [ 1, 4, 9 ]
