import {} from "./main.js";
import { load as loadPageBanner } from "./components/PageBanner.js";
import { load as loadContactForm } from "./components/ContactForm.js";

loadPageBanner("#contact-banner-block", "聯絡我們");
loadContactForm("#contact-form-block");
