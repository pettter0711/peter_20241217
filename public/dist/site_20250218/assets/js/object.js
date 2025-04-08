/*
 * object中可以包含很多屬性
 * 即使使用const宣告物件，仍可以變更其中的屬性
 * 只有確保 person 是物件，沒有限制屬性不可修改
 * 換句話說，const只有限制第一層的類型
 * 但如果將物件的變數名稱，直接拿去賦予其他值，就會報錯

 * 屬性(property) = 變數(variable)
 * 方法(method) = 函式(function)
 */

const person = {
    name: "David",
    age: 20,
    city: "Taipei",
    email: "david@gmail.com",
    sayHello: function () {
        console.log(
            `Hello, my name is ${this.name}.\nI am ${this.age} years old.\nI live in ${this.city}`
        );
    },
};

console.log(person);

// 更改 person 的屬性，不會報錯
person.name = "James";
console.log(person);

// 重新賦值 person，會報錯
// person = 1;
// console.log(person);

// 呼叫物件裡的方法(函式)
person.sayHello();

// Object使用類似JSON的格式
let students = [
    {
        name: "John",
        age: 20,
        city: "Taipei",
        email: "david@gmail.com",
        score: 90,
    },
    {
        name: "David",
        age: 20,
        city: "Taipei",
        email: "david@gmail.com",
        score: 80,
    },
];

console.log(students);

console.log("----轉 JSON 格式----");
console.log(JSON.stringify({ students }));

/**
 * 將轉換的結果貼到 students.json 檔案
 * 安裝套件 JSON Crack 方便查看結構
 */
