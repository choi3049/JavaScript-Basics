console.log("Hello world");
console.log(typeof "Hello, world!"); // 문자열 확인. 결과 값: string
console.log(parseInt("125")); // 문자를 숫자로.
console.log(Number("125")); // 문자를 숫자로.
console.log(typeof parseInt("125")); //정수로 바꾼 후 문자열 확인. 결과 값: number
console.log(parseFloat("3.14")); //소수로 바꿈. 결과 값: 3.14
console.log(parseInt("3.14")); // 결과 값: 3
console.log(parseInt("3월")); // 결과 값: 3
console.log(Number("3월")); // 결과 값: NaN
typeof parseInt(prompt()); // 입력창 생성 후 문자 입력, 숫자로 변경 후 문자열 확인. 결과 값: number
parseInt(prompt()); // 입력창 생성 후 문자 입력, 숫자로 변경
prompt(); // 입력창 생성 입력한 값 표시
parseInt(111, 2); //111이라는 숫자를 2진법으로 해석 결과 값: 7
2 / 0; //결과 값: infinity 무한을 의미
"문자열" + 0; // 문자랑 숫자를 더하면 문자열로 변경 즉 형변환 발생
0.1 + 0.2; // 결과 값: 0.30000000000000004 컴퓨터는 이진법으로 게산하기 떄문에 소수는 애매한 답을 보여줌
