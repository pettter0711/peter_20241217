import {} from "./main.js";
import { load as loadPageBanner } from "./components/PageBanner.js";
import { load as loadNewsDetailBody } from "./components/NewsDetailBody.js";
import { load as loadPageContact } from "./components/PageContact.js";
import { load as loadNewsDetailChain } from "./components/NewsDetailChain.js";

loadPageBanner("#news-detail-banner-block", "最新消息", {
    subtitle: "掌握老夫科技最新動態，了解產業創新趨勢",
});

loadNewsDetailBody("#news-detail-body-block");
loadPageContact(
    "#news-detail-contact-block",
    "打造專屬的數位轉型方案",
    "想了解如何為您的企業打造專屬的數位轉型方案？",
    "立即諮詢"
);
loadNewsDetailChain("#news-detail-chain-block");
