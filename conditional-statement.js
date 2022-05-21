if (true) {
  // 조건이 참이면 if안 내용 실행
  console.log("hello if");
}

let condition = true;
if (condition) {
  console.log("hello if");
}

let value = "사과";
let condition1 = true;
if (condition1) {
  value = "banana";
}
console.log(value); // 결과 값: banana

//if else문
if (false) {
  console.log("hello if");
} else {
  console.log("hello else");
} //결과 값: hello else

//switch문
let value1 = "A";
//해당 값과 일치하는 케이스를 찾아 실행.
switch (value1) {
  case "A":
    console.log("A");
}

let value3 = "B";
// case 는 일치하는 값을 위에서 아래로 화인하며 일치하는 값을 발견하면 그 아래 캐이스 도 전부 출력
switch (value3) {
  case "A":
    console.log("A");
  case "B":
    console.log("B");
  case "C":
    console.log("C");
}

let value4 = "B";
// case 는 일치하는 값을 위에서 아래로 화인하며 일치하는 값을 발견하면 그 아래 캐이스 도 전부 출력 그래서  break문을 작성해주면 해당 케이스만 출력가능.
switch (value4) {
  case "A":
    console.log("A");
    break;
  case "B":
    console.log("B");
    break;
  case "C":
    console.log("C");
    break;
  default: //아무것도 일치하지 않을경우
    console.log("아무것도 일치x");
}

//조건부 연산자
5 > 0 ? "참입니다" : "거짓입니다"; // 앞의 조건이 참이면 왼쪽 출력 틀리면 오른쪽
let value5 = 5 < 0 ? "참입니다" : "거짓입니다";

let cond = true;
let value7 = "";
if (cond) {
  value = "참";
} else {
  value = "거짓";
}

let cond2 = true;
let value8 = "";
switch (cond2) {
  case true:
    value8 = "참";
    break;
  case false:
    value8 = "거짓";
    break;
}
let cond3 = true;
let value9 = cond3 ? "참" : "거짓";
