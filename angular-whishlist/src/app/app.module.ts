import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { DestinoviajeComponent } from './destinoviaje/destinoviaje.component';
import { ListadestinosComponent } from './listadestinos/listadestinos.component';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';

const routes: Routes =[
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: ListadestinosComponent},
  {path: 'destino', component: DestinoDetalleComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    DestinoviajeComponent,
    ListadestinosComponent,
    DestinoDetalleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
