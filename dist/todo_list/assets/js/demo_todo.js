class Storage {
    constructor(key) {
        this.key = key;
    }

    get() {
        let data = localStorage.getItem(this.key);
        if (!data) {
            return [];
        }
        return JSON.parse(data);
    }

    set(value) {
        localStorage.setItem(this.key, JSON.stringify(value));
    }
}

const restore = function (data) {
    data.forEach((item) => {
        generateItem(item.value, item.isDone, item.uid);
    });
};

let storage = new Storage("todo");
let todoData = storage.get();

let todoInput = document.querySelector("#todoInput");
let addTodo = document.querySelector("#addTodo");
let todoList = document.querySelector("#todoList");

const generateItem = function (value, isDone) {
    let li = document.createElement("li");
    li.innerHTML = `                   
                    <input type="checkbox" ${isDone ? "checked" : ""}/>
                    <span>${value}</span>
                    <button class="delete-btn">刪除</button>
    `;

    todoList.appendChild(li);
};

const appenTodo = (value) => {
    const uid = Date.now().toString();
    todoData.push({
        isDone: false,
        value: value,
        uid: uid,
    });

    storage.set(todoData);

    generateItem(value, false, uid);
};

const appendProcess = async function () {
    let value = todoInput.value;
    if (!value) {
        await Swal.fire({
            title: "新增失敗",
            html: "<p>請輸入待辦事項</p>",
            icon: "error",
        });
        console.log("請輸入待辦事項");

        setTimeout(() => {
            todoInput.value = "";
            todoInput.focus();
        }, 500);

        return;
    }

    appenTodo(value);
    todoInput.value = "";
    todoInput.focus();
};

// 綁定 addTodo 的 click 事件
addTodo.addEventListener("click", async (e) => {
    appendProcess();
});

// 綁定 todoInput 的 keyup 事件
todoInput.addEventListener("keyup", (e) => {
    let key = e.key;
    key = key.toString().toUpperCase();

    if (key === "ENTER") {
        appendProcess();
    }
});

// 綁定刪除按鈕的功能
todoList.addEventListener("click", (e) => {
    let target = e.target;

    // // 當典籍目標的class包含"delete-btn"時觸發
    // if (target.classList.contains("delete-btn")) {
    //     // 找到距離點擊目標最近的父層li
    //     let li = target.closest("li");
    //     li.remove();
    // }

    // if (target.type === "checkbox") {
    //     let isDone = target.checked;
    //     // 找到對應的 todoData 的 index
    //     // let index = todoData.findIndex((item) => item.value === target.value);
    //     // 更新 todoData 的 isDone
    //     // todoData[index].isDone = isDone;
    //     // 更新 localStorage
    //     // storage.set(todoData);
    // }

    if (target.classList.contains("delete-btn")) {
        let uid = target.dataset.uid;
        // 找到對應的 todoData 的 index
        let index = todoData.findIndex((item) => item.uid === uid);
        // 刪除 todoData 的該項目
        todoData.splice(index, 1);
        // 更新 localStorage
        storage.set(todoData);
        // 刪除對應的 li
        let li = target.closest("li");
        li.remove();
    }

    if (target.type === "checkbox") {
        let isDone = target.checked;
        let uid = target.dataset.uid;
        // 找到對應的 todoData 的 index
        let index = todoData.findIndex((item) => item.uid === uid);
        // 更新 todoData 的 isDone
        todoData[index].isDone = isDone;
        // 更新 localStorage
        storage.set(todoData);
    }
});

restore(todoData);
