import { loadFile } from "./Utils.js";

const load = async function (selector) {
    await loadFile(selector, "assets/components/about-value.html");
};

export { load };
