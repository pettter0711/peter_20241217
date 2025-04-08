const getAccountDom = function () {
    return document.querySelector("#account");
};

// 事件類型;
/**
 * 事件類型
 * - click 點擊
 * - focus 聚焦
 * - blur 失去焦點
 * - keyup 按下鍵盤
 * - keypress 按下鍵盤
 * - change 改變
 * - submit 提交
 */

const bindDemoEvent = function () {
    console.log("---bindDemoEvent---");

    let accountDom = getAccountDom();

    // 當 input 被點擊時觸發(不常用，通常使用 focus)
    accountDom.addEventListener("click", function () {
        console.log("---click---");
    });

    accountDom.addEventListener("focus", function () {
        console.log("---focus---");
    });

    // 當 input 失去焦點時觸發(不常用，通常使用 change)
    accountDom.addEventListener("blur", function () {
        console.log("---blur---");
    });

    // 當值有改變且失去焦點時觸發
    accountDom.addEventListener("change", function () {
        console.log("---change---");
    });

    // 當按下鍵盤時觸發 (keypress 會有漏字問題)
    accountDom.addEventListener("keypress", (e) => {
        console.log("---keypress---");
        let key = e.key.toString().toUpperCase();
        console.log(key);
    });

    // 當按下鍵盤並離開時觸發 (如果要檢查內容，通常使用 keyup)
    accountDom.addEventListener("keyup", (e) => {
        console.log("---keyup---");
        let key = e.key.toString().toUpperCase();
        console.log(key);

        checkAccountLength();
    });
};

/**
 * 需求
 * 判斷帳號是否大於 10 個字
 * 如果大於 10 個字，則提示 "帳號長度超過 10 個字"
 * 如果小於 10 個字，則提示 "帳號長度小於 10 個字"
 */
const checkAccountLength = function () {
    const accountDom = getAccountDom();
    const accountValue = accountDom.value;
    const accountLength = accountValue.length;
    console.log(`目前長度: ${accountLength}`);
    if (accountLength > 10) {
        console.log("帳號長度超過 10 個字");
        accountDom.value = accountValue.slice(0, 10);
    } else {
        console.log("帳號長度小於 10 個字");
    }
};

bindDemoEvent();
