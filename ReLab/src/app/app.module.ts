import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core'; //importa questa libreria
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Imposta qui le tue api key
     AgmCoreModule.forRoot({apiKey: 'AIzaSyBAWiUSlLs-di5PiK8sf0KRhGiQnuvajbsYOUR_GOOGLE_MAPS_API_KEY'}), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }