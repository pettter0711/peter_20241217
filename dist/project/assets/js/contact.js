import {} from "./main.js";
import { load as loadPageBanner } from "./components/PageBanner.js";
import { load as loadContactForm } from "./components/ContactForm.js";
import { load as loadContactAddress } from "./components/ContactAddress.js";

loadPageBanner("#contact-banner-block", "聯絡我們");
loadContactForm("#contact-form-block");
loadContactAddress("#contact-address-block");
