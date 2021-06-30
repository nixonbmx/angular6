import { Component, OnInit, Input, HostBinding,   EventEmitter, Output } from '@angular/core';
import { destinoviaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destinoviaje',
  templateUrl: './destinoviaje.component.html',
  styleUrls: ['./destinoviaje.component.css']
})
export class DestinoviajeComponent implements OnInit {
 @Input() destino: destinoviaje;
 @Input('idx') position: number;
 @HostBinding ('attr.class') cssClass = 'col-md-4';
 @Output() clicked: EventEmitter<destinoviaje>;
  constructor() {
    this.clicked = new EventEmitter();
  }


  ngOnInit(): void {
   
  }
  ir() {
    this.clicked.emit(this.destino);
    return false;

  }
}
