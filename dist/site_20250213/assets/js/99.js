let elNum1 = document.querySelector("num1");
let elNum2 = document.querySelector("num2");
let btn = document.querySelector("run-btn");
let result = document.querySelector(".result");

let a = 9;
let b = 9;
let res = 0;

const run = () => {
    if (isNaN(elNum1) || isNaN(elNum2)) {
        return;
    }

    let a = +elNum1.value;
    let b = +elNum2.value;
    let html = "";

    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= b; j++) {
            res = i * j;
            console.log(`${i} * ${j} = ${res}`);
        }
    }
    // 待處理html的render
};

btn.addEventListener("click", (e) => {
    run();
});
