let elNum1 = document.querySelector("#num1");
let elNum2 = document.querySelector("#num2");
let btn = document.querySelector(".run-btn");
let result = document.querySelector(".result");

const run = () => {
    let num1 = +elNum1.value;
    let num2 = +elNum2.value;

    if (isNaN(num1) || !num1 || isNaN(num2) || !num2) {
        return;
    }

    // thead
    let thead = `<tr><th>`;
    for (let i = 1; i <= num1; i++) {
        thead += `<th>${i}</th>`;
    }
    thead += "</tr>";

    // tbody
    let tbody = "";
    for (let i = 1; i <= num2; i++) {
        tbody += `<tr><td>${i}</td>`;

        for (let j = 1; j <= num1; j++) {
            tbody += `<td>${i * j}</td>`;
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
    tbody += "</tr>";

    result.querySelector("table thead").innerHTML = thead;
    result.querySelector("table tbody").innerHTML = tbody;

    elNum1.value = "";
    elNum2.value = "";

    elNum1.focus();
};

btn.addEventListener("click", (e) => {
    run();
});

document.addEventListener("keyup", (e) => {
    e.preventDefault();

    let key = e.key.toString().toUpperCase();
    if (key == "ENTER") {
        run();
    }
});
