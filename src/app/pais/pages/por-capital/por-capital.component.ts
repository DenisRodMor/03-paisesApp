import { Component, OnInit } from '@angular/core';
import { Capitals } from '../../interfaces/capital.interfaces';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  termino : string    = '';
  hayError: boolean   = false;
  paises  : Country[] = [];

  constructor( private paisservice : PaisService) { }


  buscar(termino : string ){
    this.hayError=false;
    this.termino =termino;

    this.paisservice.buscarCapital(this.termino).subscribe( (paises) => {
      this.paises = paises;
    }, (err) => {
      this.hayError = true;
      this.paises   = [];
    });
  }
}
