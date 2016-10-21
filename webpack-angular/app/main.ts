//import stylesheet
// Bootstrap 3.3.6
import "./adminLTE/bootstrap/css/bootstrap.css";
// Font Awesome
import "./adminLTE/font-awesome/4.5.0/css/font-awesome.min.css";
// Ionicons
import "./adminLTE/ionicons/2.0.1/css/ionicons.min.css";
// Theme style
import "./adminLTE/dist/css/AdminLTE.min.css";
/* AdminLTE Skins. We have chosen the skin-blue for this starter
 page. However, you can choose any other skin. Make sure you
 apply the skin class to the body tag so the changes take effect.
 */
import "./adminLTE/dist/css/skins/skin-blue.min.css";
// The custom style
import "./less/styles.css";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './modules/module';
const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);