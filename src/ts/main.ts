import { ORIENTATION_isLandscape, DEVICE_type } from './UAdetect';

import 'C:/Users/rpmul/Documents/artemisWebsite/src/css/style.css'
import 'C:/Users/rpmul/Documents/artemisWebsite/src/css/fonts.css'

if (DEVICE_type == "mobile") {
    document.getElementById("nav").style.display = "none";
}