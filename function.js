function a() {
  console.log("Hello");
  console.log("Function");
}
a();

function b() {
  console.log("Hello");
  console.log("Function");
}
b();
b();
b();

function c() {
  return 10;
}
const d = c();
console.log(d);

function f(w, x, y, z) {
  console.log(w, x, y, z); //결과 값: Hello Parameter Argument
  console.log(arguments); //결과 값:   Arguments(3) ['Hello', 'Parameter', 'Argument']
}
f("Hello", "Parameter", "Argument");

function g(w, x) {
  console.log(w, x); // 결과 값: Hello Parameter
}
g("Hello", "Parameter", "Argument");

// 숫자 곱
function multiply(x, y, z) {
  console.log(x * y * z);
}

multiply(10, 11, 12);

//화살표 함수로 숫자 곱
const multiply = (x, y, z) => {
  return x * y * z;
};
multiply(10, 11, 12);

function minus1(x, y) {
  const a = 100; //함수 안에도 변수나 상수 선언 가능
  return (x - y) * a; //200
}
console.log(minus1(5, 3));
