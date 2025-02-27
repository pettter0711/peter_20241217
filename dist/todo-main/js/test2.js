import { Person } from "./test.js";

let person = new Person("John", 30);
// 使用new關鍵字建立，建立當下會呼叫class的constructor
// 建立後，會得到一個物件

person.sayHello();

person.name = "David";
person.age = 18;

person.sayHello();

let jane = new Person("Jane", 28);
jane.gender = "female";
jane.sayHello();
console.log(jane.name, jane.age, typeof jane, jane instanceof Person);
// jane instanceof Person
// 確認物件是否為某class 建立

console.log(jane.toJSON()); // 返回JSON格式的object

// 返回序列化的JSON格式object (序列化: 字串化，但很像JSON格式)
let stringify = JSON.stringify(jane.toJSON());
console.log(stringify);

// 將序列化的JSON格式object轉回JSON
let parse = JSON.parse(stringify);
console.log(parse);

jane.name = "Re Jane";
jane.age = 300;
console.log(jane.fromJSON(jane));

// ------------------------------------
// local storage測試

// 上傳至本地位置時，要先序列化
// 序列化讓資料能快平台傳輸，本地位置及網也可視為兩個不同的平台
localStorage.setItem("David", JSON.stringify(person));

// 取得本地位置的資料
let personGet = localStorage.getItem("David");
console.log(personGet); // 沒有反序列化，得到純字串

let parsePerson = JSON.parse(personGet);
console.log(parsePerson); // 反序列化，得到物件

// 將上傳至本地位置的資料抓下來，再丟到fromJSON()中恢復成new Person(類)，再接續使用
let newParsePeron = person.fromJSON(parsePerson);
console.log(newParsePeron);
newParsePeron.name = "AAAA";
newParsePeron.sayHello();

// 鍊式宣告 new chain
import { Chain } from "./chain.js";
let chain = new Chain();
chain.a().b().c();
// new Chain.a().b().c();

let inner = "inner";
console.log(inner);
window.outside = inner;
console.log(window.outside);
