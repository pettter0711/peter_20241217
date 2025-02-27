class Chain {
    constructor() {
        console.log("Chain 初始化");
    }

    a() {
        console.log("a");
        return this;
        // 回傳自己 (整個class)
    }
    b() {
        console.log("b");
        return this;
    }
    c() {
        console.log("c");
        return this;
    }
}

export { Chain };
