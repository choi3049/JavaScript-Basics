const fruits = ["사과", "오렌지", "배", "딸기"];

const arrayOfArray = [
  //이차원 배열
  [1, 2, 3],
  [4, 5],
];
arrayOfArray[0]; // [1, 2, 3]
const a = 10;
const b = 20;
const variableArray = [a, b, 30];
variableArray[1]; // 20 (b의 값)

const everything = ["사과", 1, undefined, true, "배열", null];
console.log(everything.length); //배열의 개수 출력. 6

const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
console.log(number[number.length - 3]);

const target = ["a", "b", "c", "d", "e"]; //특정 인덱스 추가 가능
target[5] = "f";
console.log(target);

const target1 = ["가", "나", "다", "라", "바"];
target1[target1.length] = "마";
console.log(target1);

const target2 = ["나", "다", "라", "마", "바"];
target.unshift("가"); //배열 맨 앞에 추가 가능
console.log(target2);

const target3 = ["가", "나", "다", "라", "마"];
target.push("바"); //배열 맨 뒤에 추가 가능
console.log(target3);

const target = ["가", "나", "다", "라", "마"];
target.pop(); //배열 마지막 부분 제거
console.log(target);

const target = ["가", "나", "다", "라", "마"];
target.shift(); //배열 처음부분 제거
console.log(target);

const target = ["가", "나", "다", "라", "마"];
target.splice(1, 1); // 배열 1부터 1개 제거
console.log(target);

const target = ["가", "나", "다", "라", "마"];
target.splice(2, 2); // 배열 2번쨰부터 2개 제거( 다, 라 제거)
console.log(target);

const target = ["가", "나", "다", "라", "마"];
const result = target.includes("다"); // 주어진 값이 배열에 존재하면 true
const result2 = target.includes("카"); // 주어진 값이 배열에 존재안하면 false
console.log(result);
console.log(result2);

const target = ["라", "나", "다", "라", "다"];
const result6 = target.indexOf("다"); // 앞에서부터 주어진 값 위치 확인
const result4 = target.lastIndexOf("라"); // 뒤에서부터 주어진 값 위치 확인
const result5 = target.indexOf("가");
console.log(result6);
console.log(result4);
console.log(result5);

// 라 모두 제거
const arr = ["가", "라", "다", "라", "마", "라"];
let index = arr.indexOf("라"); // 앞부분 부터 해당 값 위치 확인
while (index > -1) {
  arr.splice(index, 1); //해당 값 삭제
  index = arr.indexOf("라"); // 삭제후 배열의 해당 값 다시 검색
}
console.log(arr);
