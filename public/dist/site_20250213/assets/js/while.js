//  while (boolean) {}
//  先判斷 boolean 是否成立
//  成立則執行 {} 內程式碼
//  執行完 {} 內程式碼後，再判斷 boolean 是否成立
//  成立則再執行 {} 內程式碼
//  一直重複直到 boolean 不成立為止
//  !注意無窮迴圈產生
//  無窮迴圈產生條件
//  1. 迴圈變數沒有改變
//  2. 迴圈條件永遠成立 while (true) {}

let aa = 10;
while (aa > 0) {
    console.log(aa);
    aa--;
}

let i = 10;

console.log("while永遠不成立");
while (i < 10) {
    console.log(i);
    i++;
}

/**
 * do while 至少會執行一次
 */
console.log("do while 至少會執行一次");
do {
    console.log(i);
    i++;
} while (i < 10);

console.log(i);

// break除了switch用，也可以給其他迴圈用
for (let x = 0; x < 10; x++) {
    if (x == 5) {
        console.log("if迴圈結束了!!!");
        break;
    }
    console.log(x);
}

let num = 0;
while (num < 10) {
    if (num == 5) {
        console.log("while迴圈結束了!!!");
        break;
    }
    console.log(num);
    num++;
}

switch (num) {
    case 0:
        console.log(`switch的num為${num}`);
        break;

    case 1:
        console.log(`switch的num為${num}`);
        break;
}

for (let jj = 0; jj < 10; jj++) {
    if (jj == 5) {
        // break;
        continue;
    }
    console.log(jj);
}

let students = [59, 74, 92, 37, 51, 99, 91, 90, 89, 77];
let maxScore = students.length;

for (let i = 0; i < maxScore; i++) {
    if (students[i] > 90) {
        students[i] = 100;
        // break;
        continue;
    }

    students[i] = students[i] + 10;
}

console.log(students);
