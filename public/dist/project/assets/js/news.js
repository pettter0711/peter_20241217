import {} from "./main.js";
import { load as loadPageBanner } from "./components/PageBanner.js";
import { load as loadNewsList } from "./components/NewsList.js";

loadPageBanner("#news-banner-block", "最新消息");
loadNewsList("#news-list-block");
