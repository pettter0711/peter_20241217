let registerForm = document.querySelector(".register-form");
let name = document.querySelector("#user-name");
let email = document.querySelector("#user-email");
console.log(registerForm);

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    // e 是 event 物件

    if (!name.value || !email.value) {
        alert("請輸入姓名及信箱");
        return;
    }

    registerForm.submit();
});
