import { Component, OnInit } from '@angular/core';
import { DestinoviajeComponent } from '../destinoviaje/destinoviaje.component';
import { destinoviaje } from '../models/destino-viaje.model';


@Component({
  selector: 'app-listadestinos',
  templateUrl: './listadestinos.component.html',
  styleUrls: ['./listadestinos.component.css']
})
export class ListadestinosComponent implements OnInit {
  destinos: destinoviaje[];

  constructor() { 
    this.destinos = [];
  }

  ngOnInit(): void {
  }
  guardar(nombre:string, url:string):boolean{
    this.destinos.push(new destinoviaje(nombre, url));
  
    
    return false;
  }
}
