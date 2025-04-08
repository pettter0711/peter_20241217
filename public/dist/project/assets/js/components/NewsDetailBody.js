import { loadFile } from "./Utils.js";
import { NewsDetailApi } from "../api/NewsDetailApi.js";
import { getId } from "./NewsDetailUtils.js";

const initApp = function () {
    const { createApp } = Vue;
    const options = {
        data() {
            return {
                item: {},
            };
        },
        methods: {
            async init() {
                let id = getId();
                const data = await NewsDetailApi.get(id);
                this.item = data || {};
                console.log(id, this.item);
            },
        },
        mounted() {
            this.init();
            console.log("news-detail-body is mounted");
        },
    };

    const app = createApp(options);
    app.mount("#news-detail-body-app");
};

const load = async function (selector) {
    await loadFile(selector, "assets/components/news-detail-body.html");
    initApp();
};

export { load };
