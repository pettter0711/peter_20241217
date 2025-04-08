const doGet = () => {
    let url = "https://book.niceinfos.com/frontend/api/?action=sleep&timer=3";

    // 送出請求。期望拿到一些資料
    // 1
    let request = fetch(url); // 要等3秒
    // 目前 request 是一個 promise 物件

    // 拿到 response 後，再轉換成 json
    // 3
    let response = request.then(function (stream) {
        return stream.json();
    });

    // promise 的 then 方法，等待上一個動作完成後呼叫
    // 4
    response.then(function (data) {
        console.log(data);
    });

    // 2
    console.log(1234);
};

// async await  比起 Promise 更有可讀性
const combineTest = function () {
    doGetAsync();
    console.log("combineTest");
};

const combineWaitTest = async function () {
    // 先讓doGetAsync跑完，在跑後面的
    await doGetAsync();
    console.log("combineTest");
};

const doGetAsync = async function () {
    // 使用fetch串接資料，一定要用非同步處理 async await
    let url = "https://book.niceinfos.com/frontend/api/?action=sleep&timer=3";
    let request = await fetch(url);
    let response = await request.json();
    console.log(response);
    console.log(5678);
};

// document.querySelector("#doGet").addEventListener("click", doGet);
// document.querySelector("#doGet").addEventListener("click", combineTest);
document.querySelector("#doGet").addEventListener("click", combineWaitTest);
// document.querySelector("#doGet").addEventListener("click", doGetAsync);
