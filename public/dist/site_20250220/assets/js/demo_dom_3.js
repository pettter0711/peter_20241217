const setAppClass = function (className) {
    app.classList.add(className);
};

const removeAppClass = function (className) {
    app.classList.remove(className);
};

const setHighlightListener = function () {
    console.log("---set highlight---");
    setAppClass("highlight");
};

const removeHighlightListener = function () {
    console.log("---remove highlight---");
    removeAppClass("highlight");
};

const highlightControlEvent = function () {
    console.log("start event listen");
    const setHighlightBtn = document.querySelector("#set-highlight");
    const removeHighlightBtn = document.querySelector("#remove-highlight");

    /**
     * 使用具名函數不用擔心重複綁定
     */
    setHighlightBtn.addEventListener("click", setHighlightListener);

    /**
     * 改成具名函數
     * 同學改寫
     */
    // removeHighlightBtn.addEventListener("click", function () {
    //     console.log("---remove highlight---");
    //     removeAppClass("highlight");
    // });
    removeHighlightBtn.addEventListener("click", removeHighlightListener);
};

const removeHighLightControlEvent = function () {
    const setHighlightBtn = document.querySelector("#set-highlight");
    const removeHighlightBtn = document.querySelector("#remove-highlight");

    /**
     * 解除綁定
     * 要使用具名函數 (綁定即解除綁定都要，因為要抓綁定的函式名稱)
     */
    // setHighlightBtn.removeEventListener("click", (e) => {
    //     setHighlightListener();
    // });
    setHighlightBtn.removeEventListener("click", setHighlightListener);
    removeHighlightBtn.removeEventListener("click", removeHighlightListener);
};

highlightControlEvent();

/**
 * 重複綁定 -> 表示事件會跑多次
 * 解除綁定
 * 監聽類型
 */

/**
 * 當設定事件之後，資料結構變化
 * setHighlightButton.addEventListener("click", setHighlightListener);
 * events.setHighlightListener = true;
 * setHighlightButton.addEventListener("click", setHighlightListener);
 * events.setHighlightListener = true;
 * 
 * removeHighlightButton.addEventListener("click", function () {
        console.log("---remove highlight---");
        removeAppClass("highlight");
    });
    events._uid1_ = true;
    removeHighlightButton.addEventListener("click", function () {
        console.log("---remove highlight---");
        removeAppClass("highlight");
    });
    events._uid2_ = true;
 */
