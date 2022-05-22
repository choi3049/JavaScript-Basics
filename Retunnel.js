const name = "조현영";
const year = 1994;
const month = 8;
const date = 12;
const gender = "M";

//공통 부분은 리터널로 묶음 처리하는게 가독성에도 좋음
const zerocho = {
  name: "조현영",
  year: 1994,
  month: 8,
  date: 12,
  gender: "M",
};

console.log(zerocho1name);
console.log(zerocho["name"]); // 배열 처럼도 접근 가능
console.log(zerocho.date);
console.log(zerocho["date"]);

//객체 내부 속성 변경 가능
zerocho.gender = "F";
console.log(zerocho.gender);
//속성 제거
delete zerocho.gender;

//{}를 사용해 만든 객체를 객체 리터럴이라고 따로 부름
function hello() {}
hello.a = "really?";
const array = [];
array.b = "wow";
console.log(hello.a);
console.log(array.b);
