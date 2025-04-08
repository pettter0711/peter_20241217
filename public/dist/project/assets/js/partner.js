import {} from "./main.js";
import { load as loadPageBanner } from "./components/PageBanner.js";
import { load as loadPartnerCompany } from "./components/PartnerCompany.js";
import { load as loadPartnerIndustry } from "./components/PartnerIndustry.js";
import { load as loadPageContact } from "./components/PageContact.js";

loadPageBanner("#partner-banner-block", "合作夥伴");
loadPartnerCompany("#partner-company-block");
loadPartnerIndustry("#partner-industry-block");
loadPageContact(
    "#partner-contact",
    "成為合作夥伴",
    "我們歡迎各產業的合作提案，一起創造更多可能性",
    "聯絡我們"
);
