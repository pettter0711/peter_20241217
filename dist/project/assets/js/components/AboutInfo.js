import { loadFile } from "./Utils.js";
import { AboutInfoApi } from "../api/AboutInfoApi.js";

const load = async function (selector) {
    // 此處非同步，先等about-info元件載入html中，載完才會執行後面的程式
    await loadFile(selector, "assets/components/about-info.html");

    const aboutInfo = await AboutInfoApi.get();
    let html = "";

    aboutInfo.forEach(function (info) {
        html += `<${info.title_tag}>${info.title}</${info.title_tag}>
             <div class="info-block">${info.content}</div>`;
    });

    // about-info元件載入後，才會執行到這邊，#about-info-app已存在於html，自然能抓到
    let app = document.querySelector("#about-info-app");
    app.innerHTML = html;
};

export { load };
