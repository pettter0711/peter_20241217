import { loadFile } from "./Utils.js";
import { NewsListApi } from "../api/NewsListApi.js";
import { getId } from "./NewsDetailUtils.js";

const initApp = function () {
    const { createApp } = Vue;
    const options = {
        data() {
            return {
                prev: [],
                next: [],
            };
        },
        methods: {
            async init() {
                let items = await NewsListApi.get();
                let id = +getId();

                if (id > 1) {
                    let prevId = id - 1;
                    let prev = items.find((item) => item.id === prevId);
                    if (prev) {
                        this.prev = prev;
                    }
                }
                if (id < items.length) {
                    let nextId = id + 1;
                    let next = items.find((item) => item.id === nextId);
                    if (next) {
                        this.next = next;
                    }
                }
            },
        },
        mounted() {
            this.init();
        },
    };

    const app = createApp(options);
    app.mount("#news-detail-chain-app");
};

const load = async function (selector) {
    await loadFile(selector, "assets/components/news-detail-chain.html");
    initApp();
};

export { load };
