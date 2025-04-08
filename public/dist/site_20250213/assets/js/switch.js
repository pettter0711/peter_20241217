// switch 語法

let grade = "甲";
console.log("grade", grade);

/**
 * switch (數值) {
 *  case 值1:
 *      // 程式區塊
 *      break;
 *  case 值2:
 *      // 程式區塊
 *      break;
 *  default:
 *      // 程式區塊
 * }
 */
switch (grade) {
    case "甲":
        console.log("大於等於90分");
        break;
    case "乙":
        console.log("大於等於80分");
        break;
    case "丙":
        console.log("大於等於70分");
        break;
    case "丁":
        console.log("大於等於60分");
        break;
    default:
        console.log("小於60分");
}

// 沒有 break 的話，會繼續往下執行
switch (grade) {
    case "甲":
    case "乙":
    case "丙":
    case "丁":
        console.log("大於等於90分");
    default:
        console.log("小於60分");
}

//
document.addEventListener("DOMContentLoaded", function () {
    const scoreInput = document.getElementById("scoreInput");
    const convertBtn = document.getElementById("convertBtn");
    const result = document.getElementById("result");

    convertBtn.addEventListener("click", function () {
        const grade = scoreInput.value;

        if (!grade) {
            result.textContent = "請輸入甲,乙,丙,丁,或不及格";
            result.style.color = "var(--error-color)";
            return;
        }

        // 進行等級分數說明轉換
        let score = "< 60";

        switch (grade) {
            case "甲":
                score = ">= 90";
                break;
            case "乙":
                score = ">= 80";
                break;
            case "丙":
                score = ">= 70";
                break;
            case "丁":
                score = ">= 60";
                break;
            default:
                score = "< 60";
        }

        // 顯示結果
        result.textContent = `等級 ${grade} 的分數說明為：${score}`;
        result.style.color = "var(--text-color)";

        // 清空輸入框
        scoreInput.value = "";
    });
});
