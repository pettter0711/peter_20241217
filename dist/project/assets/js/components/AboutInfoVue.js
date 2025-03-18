import { loadFile } from "./Utils.js";
import { AboutInfoApi } from "../api/AboutInfoApi.js";

const load = async function (selector) {
    // 此處非同步，先等about-info元件載入html中，載完才會執行後面的程式
    await loadFile(selector, "assets/components/about-info-vue.html");

    const aboutInfo = await AboutInfoApi.get();

    // about-info元件載入後，才會初始化Vue然後掛載
    const app = Vue.createApp({
        data() {
            return {
                items: aboutInfo,
            };
        },
        methods: {},
        mounted() {},
    });

    app.mount("#about-info-app");
};

export { load };
