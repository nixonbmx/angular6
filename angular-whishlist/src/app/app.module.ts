import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DestinoviajeComponent } from './destinoviaje/destinoviaje.component';
import { ListadestinosComponent } from './listadestinos/listadestinos.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinoviajeComponent,
    ListadestinosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
