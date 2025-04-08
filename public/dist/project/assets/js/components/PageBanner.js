import { loadFile } from "./Utils.js";

/**
 * 參數規則
 * - 必填參數一定是放在前面
 * - 可選參數(有預設值的)一定是放在後面
 * - 如參數要放陣列，要加 "..." (建構函數)
 */

const load = async function (selector, title = "關於我們", params = {}) {
    await loadFile(selector, "assets/components/page-banner.html");

    const h1 = document.querySelector(".page-banner .page-banner-inner h1");

    if (h1) {
        h1.textContent = title;
    }

    const subtitle = params.subtitle || "";
    if (subtitle) {
        const h2 = document.querySelector(".page-banner .page-banner-inner h2");
        h2.textContent = params.subtitle;
    }

    console.log(h1);
    console.log(title, params);
};

export { load };
