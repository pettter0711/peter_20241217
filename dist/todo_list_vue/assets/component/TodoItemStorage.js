const key = "todos";

class TodoItemStorage {
    /**
     * 設定待辦事項
     * @param {Array} todos 待辦事項陣列
     */
    static set(value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * 取得所有待辦事項
     * @returns {Array} 待辦事項陣列
     */
    static get() {
        let value = localStorage.getItem(key);
        if (value) {
            value = JSON.parse(value);
        } else {
            value = [];
        }
        return value;
    }
}

export { TodoItemStorage };
