const key = "todo_uid";

class TodoUserStorage {
    // static 靜態class，建立時不用constructor，使用時不用先new來實例化
    // 相比constructor (藍圖)，比較不占記憶體

    static set(name) {
        // name是純文字，所以不用JSON.stringify序列化
        localStorage.setItem(key, name);
    }

    static get() {
        // 上傳localStroage時沒有序列化，所以不用JSON.parse解序列化
        return localStorage.getItem(key);
    }
}

export { TodoUserStorage };
