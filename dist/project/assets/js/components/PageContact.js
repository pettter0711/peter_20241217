import { loadFile } from "./Utils.js";

const load = async function (
    selector,
    title = "專業協助",
    description = "探索最新的科技解決方案，我們的專業團隊將為您量身打造數位轉型策略",
    text = "立即諮詢"
) {
    await loadFile(selector, "assets/components/page-contact.html");

    const domTitle = document.querySelector(".page-contact h2");
    const domDescription = document.querySelector(".page-contact .description");
    const domButton = document.querySelector(".page-contact .btn .text");

    domTitle.textContent = title;
    domDescription.textContent = description;
    domButton.textContent = text;
};

export { load };
