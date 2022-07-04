import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { region } from '../../interfaces/region.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `button{margin-right: 5px;}  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva: string = '';
  hayError: boolean   = false;
  paises: Country[]=[];

  constructor(private paisservice : PaisService) { }

  getClaseCSS(region :  string ) : string {
   return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion (region : string){
    this.regionActiva = region;
    this.hayError=false;

    if ( region === this.regionActiva){return ;}
    this.paises = [];
    // TODO: hacer el llamado al servicio
    this.paisservice.buscarRegion(region).subscribe( (paises) => {
      this.paises = paises;
    }, (err) => {
      this.hayError = true;
      this.paises   = [];
    });
  }
}
