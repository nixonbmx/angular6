import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadestinos',
  templateUrl: './listadestinos.component.html',
  styleUrls: ['./listadestinos.component.css']
})
export class ListadestinosComponent implements OnInit {
  destinos: string[];

  constructor() { 
    this.destinos = ['barranquilla','lima','buenos aires','barcelona'];
  }

  ngOnInit(): void {
  }

}
