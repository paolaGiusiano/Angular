import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

//Punto de entrada para el renderizado del lado del servidor (SSR) en Angular Universal.

//Hay que definir si lo queremos utilizar.

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
