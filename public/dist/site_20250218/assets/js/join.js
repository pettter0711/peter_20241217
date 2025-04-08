/**
 * 學生成績資料陣列
 * 每個元素都是一個物件，包含學生的基本資料和各科成績
 */
let students = [
    {
        name: "小明",
        chinese: 85,
        english: 76,
        math: 90,
    },
    {
        name: "小華",
        chinese: 92,
        english: 88,
        math: 95,
    },
    {
        name: "小芳",
        chinese: 78,
        english: 94,
        math: 80,
    },
    {
        name: "小強",
        chinese: 88,
        english: 68,
        math: 72,
    },
    {
        name: "小美",
        chinese: 95,
        english: 90,
        math: 85,
    },
];

console.log("學生成績資料：");
console.log(students);

/**
 * 將學生資料轉換成 CSV 格式
 * 1. 先產生 CSV 的標題列
 * 2. 使用 map 將每個學生資料轉換成 CSV 的一列
 * 3. 使用 join 將所有列合併成一個字串
 */
let csvHeader = ["姓名", "國文", "英文", "數學"].join(",");
let csvRows = students.map(function (student) {
    return [student.name, student.chinese, student.english, student.math].join(
        ","
    );
});

let csvString = [csvHeader, ...csvRows].join("\n");

console.log("CSV 格式的學生資料：");
console.log(csvString);

/**
 * 下載 CSV 檔案的函數
 * 1. 建立一個 Blob 物件，包含 CSV 內容
 * 2. 建立一個暫時的下載連結
 * 3. 觸發下載
 * 4. 清理暫時的 URL 物件
 */
function downloadCSV() {
    // 加入 BOM (Byte Order Mark)，讓 Excel 可以正確顯示中文
    const BOM = "\uFEFF";
    // 建立 Blob 物件
    const blob = new Blob([BOM + csvString], {
        type: "text/csv;charset=utf-8",
    });
    // 建立下載連結
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "學生成績表.csv";

    // 將連結加入網頁中並觸發點擊
    document.body.appendChild(link);
    link.click();

    // 清理
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// 建立下載按鈕
let downloadButton = document.createElement("button");
downloadButton.textContent = "下載成績表";
downloadButton.addEventListener("click", downloadCSV);
document.body.appendChild(downloadButton);
