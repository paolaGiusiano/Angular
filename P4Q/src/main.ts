import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//Hace el bootstrap, hace de punto de entrada a nuestra app., es el primer archivo que se carga.
//Inicializa la aplicación Angular en el cliente, utilizando la plataforma del navegador @angular/platform-browser.

bootstrapApplication(AppComponent, appConfig) //Config de nuestra app y el componente que sería de toda la aplicación.
  .catch((err) => console.error(err));

//ng serve --open
