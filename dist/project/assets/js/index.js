import {} from "./main.js";
import { load as loadIndexBanner } from "./components/IndexBanner.js";
import { load as loadIndexService } from "./components/IndexService.js";
import { load as loadIndexStaff } from "./components/IndexStaff.js";
import { load as loadPageContact } from "./components/PageContact.js";

loadIndexBanner("#index-banner-block");
loadIndexService("#index-service-block");
loadIndexStaff("#index-staff-block");
loadPageContact("#index-contact-block");
