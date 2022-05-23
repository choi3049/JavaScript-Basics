const answer = [1, 3, 5, 7];
const value = "3214";
let strike = 0;
let ball = 0;
answer.forEach((number, aIndex) => {
  //forEach는 인수로 함수를 받고, 배열의 요소 하나하나에 인수로 받은 함수를 각각 적용
  const index = value.indexOf(String(number));
  if (index > -1) {
    // 일치하는 숫자 발견
    if (index === aIndex) {
      // 자릿수도 같음
      strike += 1;
    } else {
      // 숫자만 같음
      ball += 1;
    }
  }
});

const numbers1 = [];
for (let n = 1; n <= 9; n += 1) {
  numbers1.push(n);
}

const numbers2 = Array(9)
  .fill() //fill()은 배열의 요소로 undefined를 채워 넣는 메서드
  .map((v, i) => i + 1); //map도 forEach처럼 함수를 인수로 받지만, return 값에 따라 새로운 요소를 반환
