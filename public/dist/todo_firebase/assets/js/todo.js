import {
    auth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    listen,
    getValue,
    setValue,
    appendValue,
    updateValue,
    removeValue,
} from "./firebase_controller.js";

// let node = "todos/7dsVKrguOyQn1n0Y7ekIpEDoKY43/-ONKVsvkazVIwCe24alZ";
// updateValue(node, { status: false, value: "123" });

// 監聽Realtime Database節點 (如有變化)
// listen("demo", (value, snapshot) => {
//     console.log(value, snapshot);
// });

// 取得Realtime Database節點的資料
// const demo = await getValue("demo");
// console.log(demo);

// 新增Realtime Database節點 (強制覆蓋)
// const value = { name: "David", age: 20 };
// setValue("demo", value);

// 新增Realtime Database節點 (自帶key)
// const value = { name: "David", age: 20 };
// appendValue("demo", value);

// 更新Realtime Database節點
// let node = "demo/-ONKCbHFK8UrBczqcYFY";
// let object = { name: "Helen", country: "Taiwan" };
// updateValue(node, object);

// 刪除Realtime Database節點
// let node = "demo";
// removeValue(node);

const appOptions = {
    data() {
        return {
            activeTab: "login",
            register: {
                email: "",
                password: "",
                confirmPassword: "",
            },
            login: {
                email: "",
                password: "",
            },
            errorMessage: {
                register: "",
                login: "",
            },
            timer: {
                register: null,
                login: null,
            },
            running: {
                register: false,
                login: false,
            },
            currentUser: "",
            todoValue: "",
            todos: {},
            realtimeDatabaseNode: "",
            realtimeDatabaseListener: null,
        };
    },
    methods: {
        async registerUser() {
            try {
                if (this.running.register) {
                    throw new Error(
                        "Please wait for the registration to complete"
                    );
                }
                this.running.register = true;

                for (const key in this.register) {
                    if (this.register[key] === "") {
                        throw new Error("Please fill in all fields");
                    }
                }
                if (this.register.password !== this.register.confirmPassword) {
                    throw new Error(
                        "Password and Confirm Password do not match"
                    );
                }

                await createUserWithEmailAndPassword(
                    auth,
                    this.register.email,
                    this.register.password
                );

                for (const key in this.register) {
                    this.register[key] = "";
                }
            } catch (e) {
                this.errorMessage.register = e.message;
                clearTimeout(this.timer.register);
                this.timer.register = setTimeout(() => {
                    this.errorMessage.register = "";
                }, 3000);
            } finally {
                this.running.register = false;
            }
        },
        async loginUser() {
            try {
                if (this.running.login) {
                    throw new Error("Please wait for the login to complete");
                }
                this.running.login = true;

                for (const key in this.login) {
                    if (this.login[key] === "") {
                        throw new Error("Please fill in all fields");
                    }
                }

                await signInWithEmailAndPassword(
                    auth,
                    this.login.email,
                    this.login.password
                );

                for (const key in this.login) {
                    this.login[key] = "";
                }
            } catch (e) {
                this.errorMessage.login = e.message;
                clearTimeout(this.timer.login);
                this.timer.login = setTimeout(() => {
                    this.errorMessage.login = "";
                }, 3000);
            } finally {
                this.running.login = false;
            }
        },
        logoutUser() {
            signOut(auth);
            this.todos = [];
        },
        addTodo() {
            console.log(this.todoValue);
            if (!this.todoValue) return;

            let todo = {
                status: false,
                value: this.todoValue,
            };

            appendValue(this.realtimeDatabaseNode, todo);
            this.todoValue = "";

            // if (!this.todoValue) {
            //     return;
            // }

            // let todo = {
            //     id: this.todos.length + 1,
            //     status: false,
            //     value: this.todoValue,
            // };
            // this.todos.push(todo);
            // this.todoValue = "";
            // this.localSave();
        },
        toggleTodo(uid) {
            console.log(uid);
            if (this.todos[uid]) {
                this.todos[uid].status = !this.todos[uid].status;
            }

            let node = `${this.realtimeDatabaseNode}/${uid}`;
            updateValue(node, this.todos[uid]);
            // this.todos.map((todo, index) => {
            //     if (todo.id === id) {
            //         todo.status = !todo.status;
            //         this.todos[index] = todo;
            //     }
            // });
            // this.localSave();
        },
        deleteTodo(uid) {
            console.log(uid);
            let node = `${this.realtimeDatabaseNode}/${uid}`;
            removeValue(node, this.todos[uid]);
            // this.todos = this.todos.filter((todo) => todo.id !== id);
            // this.localSave();
        },
        localSave() {
            let uid = this.currentUser.split("@")[0] + "_todos";
            localStorage.setItem(uid, JSON.stringify(this.todos));
        },
        localLoad() {
            let uid = this.currentUser.split("@")[0] + "_todos";
            let todos = localStorage.getItem(uid);
            if (todos) {
                this.todos = JSON.parse(todos);
            }
        },
    },
    mounted() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.currentUser = user.email;
                this.activeTab = "todo";
                this.realtimeDatabaseNode = `todos/${user.uid}`;
                this.realtimeDatabaseListener = listen(
                    this.realtimeDatabaseNode,
                    (value) => {
                        console.log(value);
                        this.todos = value;
                    }
                );
            } else {
                this.activeTab = "login";
                this.realtimeDatabaseNode = "";
                this.realtimeDatabaseListener();
            }
        });
    },
};

const app = Vue.createApp(appOptions);
app.mount("#app");
