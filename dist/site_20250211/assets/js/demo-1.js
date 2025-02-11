// alert("你被攻擊了!");

const constItem = "常數const宣告";
let letItem = "變數let宣告";
var varItem = "變數var宣告";
console.log(constItem, letItem, varItem);

// const 宣告常數，經首次宣告後不能重複宣告，也不會變更
// let 宣告變數，經首次宣告後不能重複宣告，但可以經過處理後變更，可控性高
// var 宣告變數 (同let)，但可控性較低，建議用let

// let 隱含 dead zone，可控性高 (dead zone: 在let宣告一個變數前，這個變數無法被使用)
// 隱含 var box 放在第一行，可控性較低

console.log(`var默認的var box: ${var2}`);

var var2 = 0;

const pi2 = 3.14159;
// pi2 = 999;
console.log(pi2);

// 數字型態(Number)
// 常用型態為 integer 和 float
let integer = 1; // 整數
let float = 1.1; // 浮福點數
let scientific = 1.23e-3; // 科學記號 (e放最後，代表乘以10的n次方)
let binary = 0b1010; // 二進位 (0b開頭)
let octal = 0o123; // 八進位 (0o開頭)
let haxadecimal = 0x123; // 十六進位 (0x開頭)

console.log(`integer: ${integer}，型態: ${typeof integer}`);
console.log(`float: ${float}，型態: ${typeof float}`);
console.log(`scientific: ${scientific}，型態: ${typeof scientific}`);
console.log(`binary: ${binary}，型態: ${typeof binary}`);
console.log(`octal: ${octal}，型態: ${typeof octal}`);
console.log(`haxadecimal: ${haxadecimal}，型態: ${typeof haxadecimal}`);

// 需要計算精準數字(如金額...)，會到小數點後2位以上，避免用js做，因為js的精準度相對不高
// 科學記號是為了節省數字長度，省下數字0的呈現，避免程式出錯

// 字串型態(String)
let string = "Hello World";
console.log(`string: ${string}，型態: ${typeof string}`);

string = 123;
console.log(`string: ${string}，型態: ${typeof string}`);

// boolean 布林值
let b1 = 1;
let b2 = 0;
let b3 = "0";
let b4 = -1;

//
console.log(`b1 是 ${b1} (型態: ${typeof b1})`); // 印出布林值
if (b1) {
    console.log("b1 是 true");
} else {
    console.log("b1 是 false");
}

console.log(`b2 是 ${b2} (型態: ${typeof b2})`); // 印出布林值
if (b2) {
    console.log("b2 是 true");
} else {
    console.log("b2 是 false");
}

console.log(`b3 是 ${b3} (型態: ${typeof b3})`); // 印出布林值
if (b3) {
    console.log("b3 是 true");
} else {
    console.log("b3 是 false");
}

console.log(`b4 是 ${b4} (型態: ${typeof b4})`); // 印出布林值
if (b4) {
    console.log("b4 是 true");
} else {
    console.log("b4 是 false");
}

let null1 = undefined;
let null2 = null;
console.log(`${null1}，型態為${typeof null1}，布林值為${Boolean(null1)}`); // undefined
console.log(`${null2}，型態為${typeof null2}，布林值為${Boolean(null2)}`); // object

// 型態轉換
let aa = 1;
let aa2 = "1";
let aa3 = aa + aa2;
console.log(`aa: ${aa}，型態: ${typeof aa}`);
console.log(`aa2: ${aa2}，型態: ${typeof aa2}`);
console.log(`aa3: ${aa3}，型態: ${typeof aa3}`);

// 隱式轉換
const num = 42;
const str = "價格:";

const combine = str + num;
console.log(combine, typeof combine);

// 顯式轉換
const strnum = "123";
const num2 = Number(strnum);
const name = "DAVID";
const namenum = Number(name);

console.log(strnum, typeof strnum);
console.log(num2, typeof num2);
console.log(name, typeof name);
console.log(namenum, typeof namenum);

// 文字數字轉換技巧
const strnum2 = "12";
const num3 = +strnum2;
const num4 = 123 + strnum2;
const num5 = 123;
const strnum5 = "" + num5;

console.log(strnum2, typeof strnum2);
console.log(num3, typeof num3);
console.log(num4, typeof num4);
console.log(strnum5, typeof strnum5);

// 注意，js為弱型態語言，注意型態轉換陷阱
console.log("---轉換陷阱---");
const case1 = 1 + "2"; // 數字和字串相加，會變成字串
const case2 = "3" - 1; // 字串減數字，會變成數字
const case3 = 1 == "1"; // 寬鬆相等
const case4 = [] + {}; // 陣列和物件相加，會變成字串
const case5 = [] + []; // 陣列和陣列相加，會變成字串
const case6 = "5" * "4"; // 字串和字串相乘，會變成數字

console.log(case1, typeof case1);
console.log(case2, typeof case2);
console.log(case3, typeof case3);
console.log(case4, typeof case4);
console.log(case5, typeof case5);
console.log(case6, typeof case6);

// 基本運算
console.log("---基本運算---");

const a = 10;
const b = 3;
console.log(`a: ${a}, typeof a: ${typeof a}`);
console.log(`b: ${b}, typeof b: ${typeof b}`);

const sum = a + b; // 加法

const diff = a - b; // 減法

const product = a * b; // 乘法

const quotient = a / b; // 除法

const remainder = a % b; // 餘數

const power = a ** b; // 次方

console.log(`sum: ${sum}, typeof sum: ${typeof sum}`);
console.log(`diff: ${diff}, typeof diff: ${typeof diff}`);
console.log(`product: ${product}, typeof product: ${typeof product}`);
console.log(`quotient: ${quotient}, typeof quotient: ${typeof quotient}`);
console.log(`remainder: ${remainder}, typeof remainder: ${typeof remainder}`);
console.log(`power: ${power}, typeof power: ${typeof power}`);

console.log(Math.sqrt(Math.pow(a, 4), 2));

// 遞增與遞減

console.log("---遞增與遞減---");

console.log("---遞增++---");
let x = 5;
let x_plus = x++; // 先賦值，再遞增
// 1. x_plus = x; -> x_plus = 5
// 2. x = x + 1; -> x = 5 + 1 = 6
console.log(`x: ${x}, x_plus: ${x_plus}`);

console.log("---++遞增---");
let y = 5;
let y_plus = ++y; // 先遞增，再賦值
// 1. y = y + 1; -> y = 5 + 1 = 6
// 2. y_plus = y; -> y_plus = 6
console.log(`y: ${y}, y_plus: ${y_plus}`);

console.log("---遞減---");
let z = 5;
let z_minus = z--; // 先賦值，再遞減
// 1. z_minus = z; -> z_minus = 5
// 2. z = z - 1; -> z = 5 - 1 = 4
console.log(`z: ${z}, z_minus: ${z_minus}`);

console.log("-----遞減---");
let w = 5;
let w_minus = --w; // 先遞減，再賦值
// 1. w = w - 1; -> w = 5 - 1 = 4
// 2. w_minus = w; -> w_minus = 4
console.log(`w: ${w}, w_minus: ${w_minus}`);

let xx = 1;
let yy = xx++ + xx + ++xx;
console.log(yy, xx);

// 惡搞
let i = 5;
let m = i++ - i-- - --i + i--;
console.log(`i: ${i}, m: ${m}`);

// 相等比較
console.log("---相等比較---");

const numA = 5;
const strA = "5";
console.log(`numA: ${numA}，typeod numA: ${typeof numA}`);
console.log(`strA: ${strA}，typeod strA: ${typeof strA}`);

console.log("寬鬆相等 (==)", numA == strA);
console.log("嚴格相等 (===)", numA === strA);

// 不相菶比較
console.log("---不相等比較---");
const numA2 = 5;
const strA2 = "5";

console.log("寬鬆不相等 (==)", numA2 != strA2);
console.log("嚴格不相等 (===)", numA2 !== strA2);

// 嚴格不相等 (!==) 會檢查型別和值
// 寬鬆不相等 (!=) 只會檢查值

// 大小比較
console.log("---大小比較---");

const numA3 = 10;
const numA4 = 5;
const numA5 = 10;

console.log(`numA3: ${numA3}, numA4: ${numA4}`);

console.log(`numA3(${numA3}) 大於 (>) numA4(${numA4})`, numA3 > numA4);
console.log(`numA3(${numA3}) 小於 (<) numA4(${numA4})`, numA3 < numA4);
console.log(`numA3(${numA3}) 大於等於 (>=) numA4(${numA4})`, numA3 >= numA4);
console.log(`numA3(${numA3}) 小於等於 (<=) numA4(${numA4})`, numA3 <= numA4);
console.log(`numA3(${numA3}) 大於等於 (>=) numA5(${numA5})`, numA3 >= numA5);
console.log(`numA3(${numA3}) 小於等於 (<=) numA5(${numA5})`, numA3 <= numA5);

// 特殊比較

console.log("---特殊比較---");
console.log("[] == false", [] == false);
console.log('"" == false', "" == false);
console.log('[1,2] == "1,2"', [1, 2] == "1,2");
console.log("null == undefined", null == undefined);
console.log("0 == false", 0 == false);

console.log("------------------------");
console.log("[] == false: ", [] == false);
console.log("0 == false: ", 0 == false);
console.log("null == 0: ", null == 0);
console.log("null == false: ", null == false);
console.log("null == true: ", null == true);
console.log("null == undefined: ", null == undefined);
console.log("undefined == false: ", undefined == false);
console.log("undefined == true: ", undefined == true);
