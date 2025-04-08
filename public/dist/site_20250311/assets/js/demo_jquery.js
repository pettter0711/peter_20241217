// 抓取DOM
let btn = $("#clickMe");
let account = $("#account");

console.log(btn);

// 無論有沒有抓到，都會回傳一個jQuery物件
console.log(typeof btn);

// jQuery.html() 等同於 document.getElementById('clickMe').innerHTML
console.log(btn.html());

// jQuery.val() 等同於 document.getElementById('clickMe').value
console.log(account.val());

// 綁定 click 事件 等同於 btn.addEventListener('click', function(){})
btn.on("click", (e) => {
    console.log("click me");
});

// 事件監聽僅能觸發一次
btn.one("click", (e) => {
    console.log("click one");
});

// 解除 click 事件 等同於 btn.removeEventListener('click', function(){})
// 不用具名函式，jQuery已處理好
setTimeout(() => {
    btn.off("click");
    console.log("off click");
}, 5000);

console.log(btn.on());

// 綁定多個事件 (用object格式)
account.on({
    focus: function () {
        console.log("focus");
    },
    blur: function () {
        console.log("blur");
    },
    change: function () {
        console.log("change");
        console.log(account.val());
    },
});
