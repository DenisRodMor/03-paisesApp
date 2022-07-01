import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import {switchMap, tap} from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais! : Country;

  constructor(private activatedRoute : ActivatedRoute, private paisservice : PaisService) { }

  ngOnInit(): void {
    //Traer el id del pais
    this.activatedRoute.params
    .pipe(switchMap( ({id}) => this.paisservice.getPaisPorAlpha( id) ),tap(console.log) ).subscribe(pais => this.pais = pais)


    //Esta es otra manera de hacerlo
    // this.activatedRoute.params.subscribe(({id}) => {
    //   console.log(id);

    //   this.paisservice.getPaisPorAlpha(id).subscribe(pais => {
    //     console.log(pais);
    //   })
    // });
  }

}
