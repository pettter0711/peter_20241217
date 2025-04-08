const app = document.querySelector("#app");
console.log(app);

// 取得元素內容
const getHtml = () => {
    return app.innerHTML;
};

/**
 * 設定元素的內容(快速方式，直接覆蓋)
 * 不影響原始碼呈現(通稱為後加載行為)
 * 後加載
 * - 影響SEO
 * - 提升使用者體驗
 * - 提升網站速度
 */
const useStringSetHtml = function (string) {
    app.innerHTML = string;
    console.log(string, typeof string);
};

/**
 * 使用 DOM 方法來附加元素的內容(建議使用)
 */
const useDomSetHtml = function (text) {
    // 建立元素
    let createDiv = document.createElement("div");
    createDiv.innerHTML = text;

    // 將元素附加到 DOM 中
    app.appendChild(createDiv);
    console.log(createDiv, typeof createDiv);

    return createDiv;
    // 此處有return東西出去，所以呼叫此函式時，要用變數去宣告
    // 如 let aa = useDomSetHtml('new line')
};

/**
 * 使用 DOM 方法來移除元素
 */
const useDomRemoveHtml = function (dom) {
    app.removeChild(dom);
    console.log(dom, typeof dom);
};

// 抓取input

// 取得 #account input 元素
const getAccountDom = function () {
    return document.querySelector("#account");
};

// 取得 #account input 元素的值
const getAccountValue = function () {
    let accountDom = getAccountDom();

    // 沒有任何東西，因為 innerHTML 抓取內容，但 input 沒有內容只有 value
    // return accountDom.innerHTML;

    return accountDom.value;
};

// 設定 #account input 元素的值
const setAccountValue = function (value) {
    let accountDom = getAccountDom();
    accountDom.value = value;
};

// 用js控制css
const setAppStyle = function () {
    console.log(app.style);

    /**
     * CSS(dash) -> JS(小駝峰式)
     * background-color -> backgroundColor
     */
    app.style.backgroundColor = "#1a1a1a";
    app.style.color = "#fff";
    app.style.padding = "10px";
};

console.log(app.computedStyleMap());

// 如要控制css，建議直接控制class，讓html使用已設定css的class
// 設定 #app 元素的 class
const setAppClass = function (className) {
    app.classList.add(className);
};

// 移除 #app 元素的 class
const removeAppClass = function (className) {
    app.classList.remove(className);
};

const highlightControlEvent = function () {
    const setHighLightBtn = document.querySelector("#set-highlight");
    const removeHighLightBtn = document.querySelector("#remove-highlight");

    setHighLightBtn.addEventListener("click", (e) => {
        setAppClass("highlight");
    });

    removeHighLightBtn.addEventListener("click", (e) => {
        removeAppClass("highlight");
    });
};

highlightControlEvent();
