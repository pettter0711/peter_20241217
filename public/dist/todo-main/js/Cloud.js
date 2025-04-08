class Cloud {
    constructor(uid = null) {
        // 優先使用傳入的 uid，如果沒有則從 localStorage 讀取
        this.uid = uid || localStorage.getItem("todo_uid") || null;

        // if (uid) {
        //     this.uid = uid;
        // } else if (localStorage.getItem("todo_uid")) {
        //     this.uid = localStorage.getItem("todo_uid");
        // } else {
        //     this.uid = null;
        // }

        // 從 LocalStorage 讀取儲存的 API URL
        this.apiBaseUrl = localStorage.getItem("todo_api_url") || null;
    }

    // 檢查是否有設置 uid
    checkUid() {
        if (!this.uid) {
            throw new Error("需要設置使用者 ID");
            // throw: 拋出，拋出後就中斷函式 (類似return)
            // new Error: 拋出錯誤相關動作的class...
        }
    }

    // 檢查是否有設置 API
    checkApi() {
        if (!this.apiBaseUrl) {
            return false;
        }
        return true;
    }

    // 從雲端獲取待辦事項，回傳陣列
    async fetchTodos() {
        try {
            if (!this.checkApi()) {
                console.log("API 未設定，略過雲端同步");
                return [];
            }

            if (!this.uid) {
                console.log("使用者 ID 未設定，略過雲端同步");
                return [];
            }

            const response = await fetch(`${this.apiBaseUrl}?uid=${this.uid}`);
            const result = await response.json();

            if (result.code === 200) {
                return result.data || [];
                // 如果有result.data就回傳result.data，沒有就回傳空的陣列
                // 至少回傳空的陣列，可以保證此處資料式陣列形式
            } else {
                console.error("獲取雲端資料失敗:", result);
                return [];
                // 至少回傳空的陣列，可以保證此處資料式陣列形式
            }
        } catch (error) {
            console.error("雲端連線錯誤:", error);
            return [];
        }
    }

    // 將資料儲存到雲端，回傳布林值
    async saveTodos(todos) {
        try {
            if (!this.checkApi()) {
                console.log("API 未設定，略過雲端儲存");
                return false;
            }

            if (!this.uid) {
                console.log("使用者 ID 未設定，略過雲端儲存");
                return false;
            }

            const response = await fetch(this.apiBaseUrl, {
                method: "POST", // 傳送請求方式為POST
                body: JSON.stringify({
                    uid: this.uid,
                    data: todos,
                }),
                // 確保資料傳輸為序列化(純字串)
            });

            const result = await response.json();

            if (result.code !== 200) {
                throw new Error("儲存失敗");
                // throw: 拋出，拋出後就中斷函式 (類似return)
            }

            return true;
        } catch (error) {
            console.error("雲端儲存錯誤:", error);
            return false;
        }
    }

    // 設置使用者 ID
    setUserId(uid) {
        if (!uid) {
            throw new Error("使用者 ID 不能為空");
        }
        this.uid = uid;
    }

    // 設置 API 位置
    setApiUrl(url) {
        if (!url) {
            // 如果 url 為空，則清除設定
            this.apiBaseUrl = null;
            localStorage.removeItem("todo_api_url");
            return;
        }

        // 確保 URL 結尾有斜線
        this.apiBaseUrl = url.endsWith("/") ? url : `${url}/`;
        // 儲存 API URL 到 LocalStorage
        localStorage.setItem("todo_api_url", this.apiBaseUrl);
    }
}

export { Cloud };
