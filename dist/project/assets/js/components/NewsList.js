import { loadFile } from "./Utils.js";
import { NewsListApi } from "../api/NewsListApi.js";

const initApp = function () {
    const { createApp } = Vue;
    const options = {
        data() {
            return {
                items: [],
                page: 1,
                once: 9, //每頁的新聞數量
                total: 1,
            };
        },
        methods: {
            async init() {
                const data = await NewsListApi.get();
                this.items = data;
                this.total = Math.ceil(this.items.length / this.once); // 換算頁數
            },

            getPage() {
                // 分頁邏輯
                let items = [];
                let start = (this.page - 1) * this.once;
                let end = start + this.once;
                // 依所在頁數，呈現該頁數應呈現的新聞項目 (如第2頁就是10~18筆)
                for (let i = start; i < end; i++) {
                    if (this.items[i]) {
                        items.push(this.items[i]);
                    }
                }
                return items;
            },

            toPage(page) {
                this.page = page;
                this.toTop();
            },

            toPrev() {
                if (this.page > 1) {
                    this.page--;
                    this.toTop();
                }
            },

            toNext() {
                if (this.page < this.total) {
                    this.page++;
                    this.toTop();
                }
            },

            toTop() {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            },
        },

        mounted() {
            this.init();
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
