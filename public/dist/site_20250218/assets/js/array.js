// 陣列 array
// 陣列的索引值(index)從0開始
// 陣列長度(length)是索引值+1
// 陣列的元素可以是任何型別 (因為js為弱型別的語言)
// 通常陣列的變數名稱會以複數命名 (如 nums. items. lists...)

let nums = [10, 20, 30, 40, 50];
let numsLength = nums.length;
console.log(nums);
console.log(numsLength);

nums.forEach((num, index) => {
    console.log(`${index}: ${num}`);
});

let fruits = ["蘋果"];
fruits.push("香蕉"); // 加入陣列最後一位
fruits.unshift("西瓜"); // 加入陣列第一位

// pop: 移除陣列最後的元素，並用return回傳
let lastFruit = fruits.pop();

// shift: 移除陣列第一個的元素，並用return回傳
let firstFruit = fruits.shift();

console.log(fruits);
console.log(`last Fruit (pop): ${lastFruit}`);
console.log(`first Fruit (shift): ${firstFruit}`);

// map
/**
 * map(callback) 會將陣列的每一個元素傳入，並回傳一個新的陣列
 * callback = function
 * 原本陣列不會改變
 */
let scores = [50, 60, 70, 80, 90];

let addScore = scores.map((item, index, array) => {
    console.log(item, index, array);
    return item + 10;
});

console.log("原本的陣列");
console.log(scores);
console.log("新的陣列");
console.log(addScore);

// 使用for，是作用在原本的暫列上，，因此會改變原本的陣列
// for (let i = 0; i < scores.length; i++) {
//     scores[i] += 10;
// }

// console.log(scores);

// filter
/**
 * filter(callback) 會將陣列的每一個元素傳入，並回傳一個新的陣列
 * callback = function
 * 原本陣列不會改變
 * 當回傳 true 時，該元素會被加入到新的陣列中
 */

// let lose = [];
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] < 60) {
//         lose.push(scores[i]);
//     }
// }

// console.log(lose);

let loseScore = scores.filter((item, index, array) => {
    console.log(item, index, array);
    return item < 60;
});

console.log(loseScore);

// reduce
/**
 * reduce(callback) 會將陣列的每一個元素傳入，回傳一個數值
 * callback = function
 * 原本陣列不會改變
 * result = 上一次的結果
 * item = 目前的元素
 * index = 目前的索引值
 * array = 原本的陣列
 * initialValue = 初始值(0)，決定result一開始的數字
 * 通常用於數學計算
 */
let totalScore = scores.reduce((result, item, index, array) => {
    console.log(
        `resultL ${result}, item: ${item}, index: ${index}. array: ${array}`
    );
    // item += 10;
    return result + item;
}, 0);

console.log(totalScore);

// 鍊式語法
// 1. 先把分數加10分 (map) => 回傳新的陣列
// 2. 在寄宿總分 (reduce) => 回傳一個數值

// 鏈式語法(chaining) 好處
// 1. 減少變數的宣告
// 2. 減少重複的程式碼
// 3. 增加可讀性(?)
// 4. 減少記憶體的使用
let addTotalScore = scores
    .map((item, index, array) => {
        return item + 10;
    })
    .reduce((result, item, index, array) => {
        return result + item;
    }, 0);

console.log(addTotalScore);

// join: 陣列轉字串
/**
 * join(separator) 會將陣列的元素串接成一個字串
 * separator = 分隔符號(預設為逗號)
 * 原本陣列不會改變
 */
console.log("-----------------JOIN-----------------");
let strings = ["大", "家", "好", "啊", "!"];
console.log(strings);
let totalString = strings.join("");
console.log(totalString);

// split: 字串轉陣列
/**
 * split(separator) 會將字串轉換成一個陣列
 * separator = 分隔符號，決定字串怎麼分隔成陣列(預設為空白)
 * 原本字串不會改變
 */
console.log("-----------------SPLIT-----------------");
let newString = totalString.split("");
console.log(newString);

/**
 * slice(start, end) 會回傳一個新的陣列，包含從 start 到 end 的元素
 * 原本的陣列不會改變
 */
console.log("-----------------SLICE-----------------");
let letters = ["a", "b", "c", "d", "e"];
let p = letters.slice(1, 5);
console.log(letters, p);

/**
 * splice(start, deleteCount, item1, item2, ...) 會從陣列中刪除元素，並插入新的元素
 * 原本的陣列會改變
 * 會回傳從原本陣列刪除的元素
 */
console.log("-----------------SPLICE-----------------");
let letterSplice = letters.splice(0, 2, "Z", "X");
console.log(letterSplice);

/**
 * 我要找到 C 並將他移除
 */

let findCArr = ["A", "B", "C", "D", "E"];
console.log("----我要找到C並將他移除----");
console.log(findCArr);

// 用indexOf來找尋陣列中某一元素的索引值
// 如陣列中沒有該元素，會回傳 -1
let cIndex = findCArr.indexOf("C");
if (cIndex !== -1) {
    findCArr.splice(cIndex, 1);
}
console.log(findCArr);
