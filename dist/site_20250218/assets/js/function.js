/**
 * 函數執行流程:
 *  資料流模型
 *  IN(parameter) -> 函數 -> OUT(return)
 *  OUT: 回傳值
 *  不回傳值使用 void 表示
 */

function calculateNum(a, b) {
    // 編譯器預處理
    // let a = 1;
    // let b = 2;

    let c = a + b;
    return c; // 使用return將處理好的內容回傳
}

let total = calculateNum(10, 99); //將function回傳的值賦予給一個變數
console.log(total);

// 作用愈 (區域, 全域)
let g1 = "我是g1 (let)";
var g2 = "我是g2 (var)";
const g3 = "我是g3 (const)";

/**
 * 外面宣告的變數，也可以在 function 內部使用
 * 使用 function 關鍵字宣告時，會被提升到全域作用域
 */

function demo() {
    console.log(`呼叫外面定義的變數 g1: ${g1}`);
    console.log(`呼叫外面定義的變數 g2: ${g2}`);
    console.log(`呼叫外面定義的常數 g3: ${g3}`);
}

// const demo = () => {
// console.log(`呼叫外面定義的變數 g1: ${g1}`);
// console.log(`呼叫外面定義的變數 g2: ${g2}`);
// console.log(`呼叫外面定義的常數 g3: ${g3}`);
// };

demo();
console.log(`呼叫外面定義的變數 g1: ${g1}`);
console.log(`呼叫外面定義的變數 g2: ${g2}`);
console.log(`呼叫外面定義的常數 g3: ${g3}`);

/**
 * 使用 let, var ,const 宣告的變數，為區域作用域
 * 使用 function 宣告的函數，為全域作用域
 */

// 變數汙染
const addVar = () => {
    let a1 = 1;
    a2 = a1;

    console.log(`從addVar呼叫的 => a1 : ${a1}`);
    console.log(`從addVar呼叫的 => a2 : ${a2}`);
};

addVar();

console.log(`從外部呼叫的a2 => ${a2}`);
// console.log(`從外部呼叫的 => a1 : ${a1}`);
/**
 * 呼叫 addVar 函數，會使用 20M 的記憶體
 * 當呼叫結束後，記憶體會被釋放 20M(理論上)
 * 但是因為 a2 是全域變數，所以記憶體不會被釋放
 */

let aa = 1;
let bb = aa;
console.log(`aa: ${aa}, bb: ${bb}`);

aa = 3;
console.log(`aa: ${aa}, bb: ${bb}`);

let p1 = {
    name: "David",
    age: 18,
};

let p2 = p1;

for (let k in p1) {
    console.log(`p1: ${p1[k]}`);
}
for (let j in p2) {
    console.log(`p2: ${p2[j]}`);
}

p1.name = "Ray";
for (let k in p1) {
    console.log(`p1: ${p1[k]}`);
}
for (let j in p2) {
    console.log(`p2: ${p2[j]}`);
}
