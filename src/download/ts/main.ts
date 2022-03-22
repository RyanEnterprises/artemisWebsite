// TypeScript Source Code
// RyanEnterprises


// IMPORTS

// from the User Agent utility
import { ORIENTATION_isLandscape, DEVICE_type } from './UAdetect';
// from the index declaration file
import { header, headerLogo, nav, hero, heroTitle, heroSubtitle, downloadBtn } from '../../ts/indexDeclarations';

import 'C:/Users/rpmul/Documents/artemisWebsite/src/css/style.css'
import 'C:/Users/rpmul/Documents/artemisWebsite/src/css/fonts.css'

if (DEVICE_type == "mobile") {
    nav.style.display = "none";
}