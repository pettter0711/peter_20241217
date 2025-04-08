/**
 * 使用 document 物件底下的方法(method) querySelector(selector) 來取得 DOM 元素
 * 會回傳一個 Object
 * selector 可以是 CSS 選擇器
 * # 代表 id
 * . 代表 class
 * 可以使用後代選擇器之類的語法
 */

// 抓取的物件不存在，會變成null
// null也是物件(object)

/**
 * 物件說明
 * 屬性 = 變數
 * 方法 = 函式
 */

const app = document.querySelector("#app");
console.log(app, typeof app);

// innerHTML 變更元素內容
// 變更元素內容，不影響原始碼呈現，通稱為「後加載」

// 後加載:
// 瀏覽器將網頁原始碼載入後，在渲染js
// 1. 影響SEO (部分爬蟲不會等渲染)
// 2. 提升使用者體驗
// 3. 提升網站速度

let html = app.innerHTML;
console.log(html);

let newHtml = "<div>123</div>";
app.innerHTML = newHtml;

// app.removeChild(newHtml); // 噴錯
/**
 * 會發生錯誤
 * Uncaught TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
 * 因為 newHTML 是字串
 *
 */

/**
 * 建立元素(建議使用)
 */
let createDiv = document.createElement("div");
createDiv.innerHTML = "456";

/**
 * 將元素附加到 DOM 中
 */
app.appendChild(createDiv);
console.log(createDiv, typeof createDiv);

/**
 * 移除元素
 */
app.removeChild(createDiv);
console.log(createDiv, typeof createDiv);
