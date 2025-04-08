class NewsListApi {
    static async get() {
        try {
            const response = await fetch("assets/database/news_list.json");
            const data = await response.json();

            return data ? data : [];
        } catch (e) {
            return [];
        }
    }
}

export { NewsListApi };
