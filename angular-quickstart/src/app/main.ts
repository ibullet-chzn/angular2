import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './module';
import './less/styles.less';
const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);