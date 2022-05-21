//while문
let i = 1;
while (i <= 100) {
  console.log("Hello, while!");
  i++;
}

let p = 0;
while (true) {
  if (p === 5) break;
  p++;
}
console.log(i);

let a = 0;
while (a < 10) {
  a++;
  if (a % 2 === 0) {
    continue;
  }
  console.log(a);
}

//for문
for (let i = 0; i < 100; i++) {
  console.log("Hello, for!");
}

let k = 0;
while (k < 100) {
  console.log(k + 1);
  k++;
}

for (let j = 0; j < 100; j++) {
  console.log(j + 1);
}

//7단 짝수 값은 출력x
let b = 7;
let value;
for (let r = 1; r <= 9; r++) {
  value = r * b;
  if (value % 2 === 0) continue;
  console.log(value);
}

// 구구단 출력 짝수 값은 출력x
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i % 2 === 0 || j % 2 === 0) continue;
    console.log(i, "*", j, "=", i * j);
  }
}
