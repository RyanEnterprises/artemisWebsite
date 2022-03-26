// TypeScript Source Code
// RyanEnterprises


// IMPORTS

// from the User Agent utility
import { ORIENTATION_isLandscape, DEVICE_type } from './UAdetect';
// from the index declaration file
import { header, headerLogo, nav, hero, heroTitle, heroSubtitle, downloadBtns, download, downloadText, mobWarning } from './indexDeclarations';

import 'C:/Users/rpmul/Documents/artemisWebsite/src/css/style.css'
import 'C:/Users/rpmul/Documents/artemisWebsite/src/css/fonts.css'


let showDownloadIfUserIsDesktop = () => {
    if (DEVICE_type == "desktop") {
        mobWarning.style.display = "none";
    }
}

let hideDownloadIfUserIsMobile = () => {
    if (DEVICE_type == "mobile") {
        download.style.display = "none";
        downloadBtns.style.display = "none";
        mobWarning.style.display = "block";
    }
}

if (DEVICE_type == "mobile") {
    nav.style.display = "none";
    hideDownloadIfUserIsMobile();
}
else if (DEVICE_type == "desktop") {
    showDownloadIfUserIsDesktop();
}


