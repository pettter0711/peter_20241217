class Person {
    // 屬性(property) 預設值，不用使用 let
    from = "Taiwan";

    // 建構式，每次建立都會執行
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(
            `Hello, my name is ${this.name} and I am ${this.age} years old.\nI am from ${this.from}`
            // 在class中使用宣告的變數，要用this
            // 如果是在函式中宣告的變數，在同一函式內使用，就不用加this
        );
    }

    toJSON() {
        return {
            name: this.name,
            age: this.age,
        };
    }

    fromJSON(json) {
        let person = new Person(json.name, json.age);
        return person;
    }
}

export { Person };
// 輸出這個class，讓外部js可以使用
// 要輸出，js引入時要設置為type="module"
