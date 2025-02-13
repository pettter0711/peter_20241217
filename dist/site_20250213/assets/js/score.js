// 巢狀 if
let score = 85;

if (score >= 90) {
    console.log("優秀");
} else if (score >= 80) {
    console.log("良好");
} else if (score >= 70) {
    console.log("及格");
} else {
    console.log("不及格");
}

//
document.addEventListener("DOMContentLoaded", function () {
    const scoreInput = document.getElementById("scoreInput");
    const convertBtn = document.getElementById("convertBtn");
    const result = document.getElementById("result");

    convertBtn.addEventListener("click", function () {
        const score = Number(scoreInput.value);

        // 檢查是否在有效範圍內
        if (score < 0 || score > 100 || isNaN(score)) {
            result.textContent = "請輸入 0 到 100 之間的數字";
            result.style.color = "var(--error-color)";
            return;
        }

        // 進行等級轉換
        let grade;
        if (score >= 90) {
            grade = "甲";
        } else if (score >= 80) {
            grade = "乙";
        } else if (score >= 70) {
            grade = "丙";
        } else if (score >= 60) {
            grade = "丁";
        } else {
            grade = "不及格";
        }

        // 邏輯異常
        // if (score >= 60) {
        //     grade = "甲";
        // } else if (score >= 70) {
        //     grade = "乙";
        // } else if (score >= 80) {
        //     grade = "丙";
        // } else if (score >= 90) {
        //     grade = "丁";
        // } else {
        //     grade = "不及格";
        // }

        // 顯示結果
        result.textContent = `分數 ${score} 的等級為：${grade}`;
        result.style.color = "var(--text-color)";

        // 清空輸入框
        scoreInput.value = "";
    });
});

// let score = 59;

/**
 * 解法1 if...else
 */
// let grade;
// if (score >= 60) {
//     grade = "及格";
// } else {
//     grade = "不及格";
// }

/**
 * 解法2 iif
 */
// let grade = (score >= 60) ? "及格" : "不及格";

/**
 * 解法3 hack 邏輯
 */
// let grade = "不及格";
// if (score >= 60) {
//     grade = "及格";
// }

/**
 * 解法4 思維反轉(NOT)
 */
// let grade = "及格";
// if (score < 60) {
//     grade = "不及格";
// }

// console.log(grade);
