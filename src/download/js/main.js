// Imports
// Stylesheets
import 'C:/Users/rpmul/Documents/artemisWebsite/src/css/style.css';
import 'C:/Users/rpmul/Documents/artemisWebsite/src/css/fonts.css';
// From the user agent
import { DEVICE_type } from './userAgent';
// From the declaration file
import { nav } from './downloadDeclarations';
// Function to hide nav bar on mobile
if (DEVICE_type === 'mobile') {
    nav.style.display = 'none';
}
