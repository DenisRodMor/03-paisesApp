import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private paisservice : PaisService) { }

  ngOnInit(): void {
    //Traer el id del pais
    this.activatedRoute.params
    .pipe(switchMap( ({id}) => this.paisservice.getPaisPorAlpha( id) ) ).subscribe(resp => {
      console.log(resp);
    })


    //Esta es otra manera de hacerlo
    // this.activatedRoute.params.subscribe(({id}) => {
    //   console.log(id);

    //   this.paisservice.getPaisPorAlpha(id).subscribe(pais => {
    //     console.log(pais);
    //   })


    // });
  }

}
