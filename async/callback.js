//jsは同期的
//hoistingとは var, funtion　declarationなどのコードが自動で先に実行

console.log("1");
console.log("2");
console.log("3");

//非同期とはコードがいつ実行するか知らない
//下記のようにコードの実施時間を決めるのがcallback関数
setTimeout(function () {
  console.log("4");
}, 1000); //1秒後実行

console.log("5");

//エロウー関数で可能
setTimeout(() => console.log("2"), 1000);

//同期コルバック
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

//非同期コルバック
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

//Callback Hell example
class UserStorage {
  loginUser(id, password, onSourcess, onError) {
    setTimeout(() => {
      if (
        (id === "choe" && password === "deram") ||
        (id === "coder" && password === "planIT")
      ) {
        onSourcess(id);
      } else {
        onError(new Error("not foubd"));
      }
    }, 2000);
  }

  getRoles(user, onSucess, onError) {
    setTimeout(() => {
      if (user === "choe") {
        onSucess({ name: "choe", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}
