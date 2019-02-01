import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtporcentaje') txtporcentaje: ElementRef;

  @Input('leyend') leyenda = 'Leyenda';
  @Input() porcentaje ;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
  }

  onChanges( newValue: number) {

    // let elemHTML = document.getElementsByName('porcentaje')[0];
    // console.log( this.txtporcentaje );

    


    if ( newValue >= 100 ) {
      this.porcentaje = 100;
    } else if ( newValue <= 0 ) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    // elemHTML.value = Number(this.porcentaje); Castear a un numero un elemento
    // elemHTML.value = this.porcentaje;
    this.txtporcentaje.nativeElement.value = this.porcentaje;

    this.cambioValor.emit( this.porcentaje );

    this.txtporcentaje.nativeElement.focus();

  }

  cambiar(valor: number) {

    if (this.porcentaje <= 0 && valor < 0 ) {
      this.porcentaje = 0;
      return;
    }
    if (this.porcentaje >= 100 && valor > 0 ) {
      this.porcentaje = 100;
      return;
    }
    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit( this.porcentaje );
  }

}
