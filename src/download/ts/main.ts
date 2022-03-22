// Imports
// Stylesheets
import 'C:/Users/rpmul/Documents/artemisWebsite/src/css/style.css';
import 'C:/Users/rpmul/Documents/artemisWebsite/src/css/fonts.css';

// From the user agent
import { DEVICE_type } from '../../ts/UAdetect';

// From the declaration file

import { nav, header, headerLogo } from '../../ts/indexDeclarations';

// Function to hide nav bar on mobile

if (DEVICE_type === 'mobile') {
    nav.style.display = 'none';   
}