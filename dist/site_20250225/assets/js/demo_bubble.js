// list.addEventListener("click", (e) => {
//     let tag = e.target;
//     tag = tag.tagName.toString().toUpperCase();

//     console.log(tag);
// });

// 思維1: 將全部的 li 進行 click 事件監聽
const method1 = function () {
    let items = document.querySelectorAll(".list-item");
    items.forEach((item) => {
        item.addEventListener("click", (e) => {
            console.log(item.innerHTML);
        });
    });
};

const forceAppend = function (content) {
    let listWrap = document.querySelector("#list");
    // listWrap.innerHTML += `<li class="list-item">${content}</li>`;
    listWrap.appendChild(content);
};

const canAddItem = function () {
    let addButton = document.querySelector("#add-item");
    let newItem = document.querySelector("#new-item");
    let listWrap = document.querySelector("#list");

    addButton.addEventListener("click", (e) => {
        if (newItem.value === "") {
            alert("請輸入內容");
            return;
        }

        let li = document.createElement("li");
        li.classList.add("list-item");
        li.innerHTML = newItem.value;

        forceAppend(li);
        // method1();
        method2();
    });
};

// 思維2: 擒賊先擒王 (因 li 可能會有好幾百萬筆，為避免穎效能，從父層ul開始監聽)
const method2 = function () {
    let listWrap = document.querySelector("#list");
    listWrap.addEventListener("click", (e) => {
        // 阻止事件冒泡
        e.stopPropagation();

        //  e.target 是點擊的元素
        let item = e.target;
        if (item.tagName.toString().toUpperCase() === "LI") {
            console.log(item.innerHTML);
        }
    });
};

// 在html中做的任何操作都是一種事件
// 事件氣泡產生後會持續往上
// 如有元素用事件監聽去監聽相對應的事件，就會執行動作
// 為避免同一事件(如點擊)被其他元素監聽到，要做終止冒泡: e.stopPropagation();
const handleClick = function () {
    let body = document.querySelector("body");
    body.addEventListener("click", (e) => {
        console.log(e.target);
    });
};

// method1();
method2();
canAddItem();
handleClick();
