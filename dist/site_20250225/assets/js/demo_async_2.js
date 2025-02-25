const doGetAsync = async function () {
    throw new Error("test error");
    let url = "https://book.niceinfos.com/frontend/api/?action=sleep&timer=3";
    let request = await fetch(url);
    let response = await request.json();
    console.log(response);
    console.log(5678);
};

// await doGetAsync();

(async () => {
    try {
        await doGetAsync(); // 不會執行
        console.log("try");
    } catch (e) {
        console.log(e);
    }
})();

// 會執行
console.log("END");
