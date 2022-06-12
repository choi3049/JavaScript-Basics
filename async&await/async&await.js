// async와 await는 자바스크립트의 비동기 처리 패턴 중 가장 최근에 나온 문법입니다.
// 기존의 비동기 처리 방식인 콜백 함수와 프로미스의 단점을 보완하고
// 개발자가 읽기 좋은 코드를 작성할 수 있게 도와주죠

// 코드를 logName()이라는 간단한 함수로 감싸보겠습니다.
function logName() {
  var user = fetchUser("domain.com/users/1");
  if (user.id === 1) {
    console.log(user.name);
  }
}

//   이제 위 함수를 실행하면 아까와 동일하게 코드가 동작할 겁니다.
//   자 그리고 여기서 아래와 같이 async와 await를 추가해주면
async function logName() {
  var user = await fetchUser("domain.com/users/1");
  if (user.id === 1) {
    console.log(user.name);
  }
}
//   이게 바로 async await 코드입니다. 이해못해도 아래에서 계속 설명

// 자 저희가 조금 전에 본 코드가 대체 어떤 의미인지 한번 알아보겠습니다.
// 먼저 아까 살펴봤던 logName() 함수 코드를 다시 보겠습니다.
function logName() {
  var user = fetchUser("domain.com/users/1");
  if (user.id === 1) {
    console.log(user.name);
  }
}

//   여기서 fetchUser()라고 하는 코드는 서버에서 데이터를 받아오는 HTTP 통신 코드라고 가정했습니다.
//   일반적으로 자바스크립트의 비동기 처리 코드는 아래와 같이 콜백을 사용해야지 코드의 실행 순서를 보장받을 수 있죠.

function logName() {
  // 아래의 user 변수는 위의 코드와 비교하기 위해 일부러 남겨놓았습니다.
  var user = fetchUser("domain.com/users/1", function (user) {
    if (user.id === 1) {
      console.log(user.name);
    }
  });
}

//   이미 위와 같이 콜백으로 비동기 처리 코드를 작성하는 게 익숙하신 분들이라면 문제가 없겠지만,
//   이 사고방식에 익숙하지 않은 분들은 고개가 갸우뚱할 겁니다.

// 그래서 저희가 처음 프로그래밍을 배웠던 그때 그 사고로 돌아가는 것이죠.
// 아래와 같이 간단하게 생각하자구요.
// 비동기 처리를 콜백으로 안해도 된다면..
function logName() {
  var user = fetchUser("domain.com/users/1");
  if (user.id === 1) {
    console.log(user.name);
  }
}

//   서버에서 사용자 데이터를 불러와서 변수에 담고, 사용자 아이디가 1이면 사용자 이름을 출력한다.
// 이렇게 하려면 async await만 붙이시면 됩니다.

// async & await 적용 후
async function logName() {
  var user = await fetchUser("domain.com/users/1");
  if (user.id === 1) {
    console.log(user.name);
  }
}

//   이제 async await의 기본 문법을 알아보겠습니다.

async function 함수명() {
  await 비동기_처리_메서드_명();
}

//   먼저 함수의 앞에 async 라는 예약어를 붙입니다. 그러고 나서 함수의 내부 로직 중 HTTP 통신을 하는
//   비동기 처리 코드 앞에 await를 붙입니다. 여기서 주의하셔야 할 점은 비동기 처리 메서드가 꼭 프로미스
//   객체를 반환해야 await가 의도한 대로 동작합니다.

// 일반적으로 await의 대상이 되는 비동기 처리 코드는 Axios 등 프로미스를 반환하는 API 호출 함수입니다.

// 그럼 문법을 좀 더 정확하게 이해하기 위해서 간단한 async await 코드를 보겠습니다.
function fetchItems() {
  return new Promise(function (resolve, reject) {
    var items = [1, 2, 3];
    resolve(items);
  });
}

async function logItems() {
  var resultItems = await fetchItems();
  console.log(resultItems); // [1,2,3]
}

//   https://joshua1988.github.io/web-development/javascript/js-async-await/
