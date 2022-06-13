const items = [1, 2, 3, 4, 5, 6];

const result = items.map(function (value) {
  return value * 2;
});

console.log(result);

[1, 2, 3].forEach(function (value) {
  console.log(value);
});

//「map」で試した例
[1, 2, 3].map(function (value) {
  console.log(value);
});

var items2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var result2 = items2.map(function (value, index, array) {
  //「index番号」が偶数の時だけ2倍にする
  if (index % 2 !== 0) {
    return value * 2;
  } else {
    return value;
  }
});

console.log(result2);

var map = new Map();

map.set("name", "太郎");
map.set("age", 30);
console.log(map.get("name"));
console.log(map.size);
console.log(map.has("age"));
// map.delete('name');
// map.clear();
for (var key of map.keys()) {
  console.log(key);
}

for (var val of map.values()) {
  console.log(val);
}
