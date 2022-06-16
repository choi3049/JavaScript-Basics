var jbAry = ["Lorem", "Ipsum", "Dolor"];
var jbStr1 = jbAry.join();
var jbStr2 = jbAry.join(" / ");
document.write("<p>" + jbStr1 + "</p>");
document.write("<p>" + jbStr2 + "</p>");

const arr = ["바람", "비", "물"];

console.log(arr.join());
// 바람,비,물

console.log(arr.join(""));
// 바람비물

console.log(arr.join("-"));
// 바람-비-물
console.log(arr.join("+"));
console.log(arr.join("/"));

//배열의 요소들을 연결하여 하나의 문자열로 만드는 함수.
var test = ["2020", "01", "01"];
var result1 = test.join("-");
console.log(result1);

// result : 2020-01-01var result2 = test.join('/'); // result : 2020/01/01
