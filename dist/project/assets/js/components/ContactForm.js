import { loadFile } from "./Utils.js";

const load = async function (selector) {
    await loadFile(selector, "assets/components/contact-form.html");
};

export { load };
