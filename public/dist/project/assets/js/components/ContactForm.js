import { loadFile } from "./Utils.js";
import { APP_URL } from "../api/env.js";

// const APP_URL = "{{ Apps Script的部屬URL }}";
/** 網址、關鍵參數、機密資料等，不能上傳版本控管(git)，
 * 要另外建檔管理(env)，並用設定檔讓git忽略(.gitignore)
 */

const initApp = function () {
    const { createApp } = Vue;
    const options = {
        data() {
            return {
                db: {
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                },
                url: APP_URL,
                isSending: false,
            };
        },
        methods: {
            async doSubmit() {
                // process lock
                // 傳送時，打開鎖頭，讓button變為無法點擊
                this.isSending = true;

                let formData = new FormData();
                /** 將資料包裝成表單形式傳送，不會因為跨域傳送而卡在驗證問題。
                 * Apps Script屬於跨域，如傳送JSON檔(純文字檔)，會有驗證問題，是否能接收POST請求
                 * 但包裝成表單，可以跳過驗證
                 * 對於表單傳送，接收端主機可採取防禦域名或IP位置 (院銘可能被作假 header)
                 */

                const requires = {
                    name: "請輸入姓名",
                    email: "請輸入電子郵件",
                    subject: "請輸入主旨",
                    message: "請輸入訊息內容",
                };

                for (let key in this.db) {
                    if (this.db[key] === "") {
                        alert(requires[key]);
                        return;
                    }

                    formData.append(key, this.db[key]);
                }

                try {
                    let response = await fetch(this.url, {
                        method: "POST",
                        body: formData,
                    });

                    if (response.ok) {
                        alert("訊息已送出");
                        this.isSending = false;

                        console.log(formData);
                        return;
                    }

                    throw new Error("訊息傳送失敗");
                } catch (e) {
                    this.isSending = false;
                    console.log(e);
                }

                console.log(this.db);
            },
        },

        mounted() {
            console.log("this is mounted");
        },
    };
    const app = createApp(options);
    app.mount("#contact-form-app");
};

const load = async function (selector) {
    await loadFile(selector, "assets/components/contact-form.html");
    initApp(); //html元件載入後，再讓ue掛載
};

export { load };
