import { loadFile } from "./Utils.js";
import { NewsListApi } from "../api/NewListApi.js";

const initApp = function () {
    const { createApp } = Vue;
    const options = {
        data() {
            return {
                items: [],
            };
        },
        methods: {},

        async mounted() {
            this.items = await NewsListApi.get();
            console.log("this is mounted");
        },
    };

    const app = createApp(options);
    app.mount("#news-list-app");
};

const load = async function (selector) {
    await loadFile(selector, "assets/components/news-list.html");
    initApp();
};

export { load };
