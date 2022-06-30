import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{


  @Output( )  onEnter : EventEmitter<string> = new EventEmitter();
  @Output() OnDebounce: EventEmitter<string> = new EventEmitter();

  debouncer : Subject<string> = new Subject(); //debouncer=antirrebote

  termino : string    = '';
  constructor() { }

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe(valor => {
      this.OnDebounce.emit(valor);
    })
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event : any){
   this.debouncer.next(this.termino);
  }
}
