import { TodoUserStorage } from "../component/TodoUserStorage.js";
import { TodoItemStorage } from "../component/TodoItemStorage.js";
import { TodoApiStorage } from "../component/TodoApiStorage.js";
import { TodoApiRequest } from "../component/TodoApiRequest.js";

const { createApp } = Vue;

const todoOptions = {
    data() {
        return {
            user: {
                name: "",
            },
            newTodo: "",
            todos: [],
            apiUrl: "",
        };
    },
    methods: {
        // methods在html中可以不用加()，除非要塞參數
        // 所以methods命名可以以動詞為開頭，和一般變數區別
        async setUserName(isChanging = true) {
            try {
                // ES6 JS的模組化關係，導致Swal.fire無法直接使用
                // 可以直接從window抓他 (window為html中最上層的東西)
                // 如宣告變數未使用let，變數會上升至window，變成全域變數
                const result = await window.Swal.fire({
                    title: isChanging ? "更換使用者 ID" : "請輸入使用者 ID",
                    input: "text",
                    inputLabel: "這是必填欄位",
                    inputPlaceholder: "請輸入您的使用者 ID",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    confirmButtonText: "確認",
                    showCancelButton: isChanging,
                    cancelButtonText: "取消",
                    inputValidator: (value) => {
                        if (!value) {
                            return "使用者 ID 不能為空！";
                        }
                    },
                });

                if (result.isConfirmed && result.value) {
                    this.user.name = result.value;
                    this.setUserToStorage(this.user.name);
                }
            } catch (error) {
                console.error("輸入使用者 ID 時發生錯誤:", error);
                // 如果發生錯誤，稍後重試
                setTimeout(() => this.setUserName(isChanging), 1000);
            }
        },

        setUserToStorage(name) {
            TodoUserStorage.set(name);
        },

        getUserFromStorage() {
            return TodoUserStorage.get();
        },

        addTodo() {
            if (this.newTodo.trim() === "") {
                Swal.fire({
                    title: "請輸入待辦事項!",
                    icon: "warning",
                });
                return;
            }

            this.todos.push({
                id: Date.now().toString(),
                text: this.newTodo,
                completed: false,
            });

            TodoItemStorage.set(this.todos);

            console.log(this.newTodo);
            console.log(this.todos);

            this.newTodo = "";
        },

        deleteTodo(id) {
            // 點擊刪除按鈕時，傳入該按鈕所屬待辦事項的id，
            // 再用filter去對陣列todos篩選id沒有被傳入的項目出來
            this.todos = this.todos.filter((todo) => {
                return todo.id != id;
            });

            TodoItemStorage.set(this.todos);
        },

        toggleTodo(id) {
            // 先複製出原始的todos，再與原始todos比對
            this.todos = this.todos.map((todo) => {
                // 如新的todos id與原始todos 的id一樣，就變化該項todo的completed狀態
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                // 最後把調整completed狀態的todo丟回去，並賦予給原始todos
                return todo;
            });

            TodoItemStorage.set(this.todos);
        },

        async setApiUrl() {
            const result = await window.Swal.fire({
                title: "設定 API 位置",
                input: "url",
                inputLabel: "請輸入 API 位置",
                inputPlaceholder: "https://example.com/api/todo/",
                inputValue: this.apiUrl || "", // new
                showCancelButton: true,
                showDenyButton: true,
                confirmButtonText: "確認",
                denyButtonText: "清除設定",
                cancelButtonText: "取消",
                inputValidator: (value) => {
                    if (value) {
                        try {
                            const url = new URL(value);
                            if (!url.protocol.startsWith("http")) {
                                return "請使用 HTTP 或 HTTPS 協議";
                            }
                        } catch (e) {
                            return "請輸入有效的 URL";
                        }
                    }
                },
            });

            if (result.isDenied) {
                this.apiUrl = "";
                // 儲存到 LocalStorage
                TodoApiStorage.set("");
                return;
            }

            if (result.isConfirmed && result.value) {
                this.apiUrl = TodoApiStorage.protectUrl(result.value);
                // this.apiUrl = result.value;
                // 儲存到 LocalStorage
                TodoApiStorage.set(this.apiUrl);
                this.initTodos();
                return;
            }
        },

        async initTodos() {
            if (this.apiUrl) {
                this.todos = await TodoApiRequest.get(this.user.name);
                TodoItemStorage.set(this.todos);
            } else {
                this.todos = TodoItemStorage.get();
            }
        },
    },
    mounted() {
        console.log("Todo app mounted");
        this.user.name = this.getUserFromStorage();
        if (!this.user.name) {
            this.setUserName();
        }
        this.apiUrl = TodoApiStorage.get();
        this.initTodos();
    },
};

const todoApp = createApp(todoOptions);
todoApp.mount("#app");
