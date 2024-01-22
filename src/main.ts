import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component'; 
import { importProvidersFrom } from '@angular/core'; 


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

