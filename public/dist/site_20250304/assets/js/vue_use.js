// const createApp = Vue.createAoo;
// const ref = Vue.ref;

const { createApp, ref } = Vue;

// options API
// 比較直覺，適合小型專案
const options = {
    data() {
        return {
            name: "David",
        };
    },
    methods: {
        setName(name) {
            this.name = name;
        },
    },
};

const optionsApp = createApp(options);
optionsApp.mount("#options-app");

// composition API
// 可以拆開使用
const compositionApp = createApp({
    setup() {
        const name = ref("David");
        const setName = (newName) => {
            name.value = newName;
        };
        return { name, setName };
    },
});

compositionApp.mount("#composition-app");
