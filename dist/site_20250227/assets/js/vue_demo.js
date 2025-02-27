const options = {
    data() {
        return {
            message: "Hello Vue!",
        };
    },
    methods: {},
    mounted() {},
};

const vm = Vue.createApp(options);

vm.mount("#vue-app");
