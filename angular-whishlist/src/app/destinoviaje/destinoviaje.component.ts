import { Component, OnInit, Input } from '@angular/core';
import { destinoviaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destinoviaje',
  templateUrl: './destinoviaje.component.html',
  styleUrls: ['./destinoviaje.component.css']
})
export class DestinoviajeComponent implements OnInit {
 @Input() destino: destinoviaje;
  constructor() {}

  ngOnInit(): void {
   
  }

}
