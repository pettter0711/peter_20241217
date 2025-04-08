const demo = function () {
    console.log("demo-module");
};

/**
 * 載入指定路徑的 HTML 檔案
 * @param {*} selector 載入的元素
 * @param {*} filePath 載入的 HTML 檔案路徑
 */

const loadFile = async function (selector, filePath) {
    let dom = document.querySelector(selector);
    if (!dom) {
        console.error("DOM 抓錯囉!");
        return;
    }

    try {
        const request = await fetch(filePath);
        const html = await request.text(); //將fetch接收到的資料，轉成text(純文字檔)
        dom.innerHTML = html;
    } catch (e) {
        console.error(e);
    }
};

const currentFile = function () {
    let path = location.pathname;

    let ap = path.split("/");
    let file = ap[ap.length - 1];
    if (!file) {
        file = "index.html";
    }

    return file;
};

export { demo, loadFile, currentFile };
