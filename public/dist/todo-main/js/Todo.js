class Todo {
    // 參數中可設置預設值，屆時呼叫此類或函式時，可以不用再特別塞入此參數
    // 通常預設設值為最常使用的值
    constructor(text, completed = false) {
        this.text = text;
        this.completed = completed;
        this.id = Date.now().toString();
    }

    toggle() {
        this.completed = !this.completed;
    }

    toJSON() {
        return {
            id: this.id,
            text: this.text,
            completed: this.completed,
        };
    }

    // 將舊的JSON物件，再次賦予class的藍圖，再返回
    static fromJSON(json) {
        const todo = new Todo(json.text, json.completed);
        todo.id = json.id;
        return todo;
    }
}

export { Todo };
