import { Component, OnInit } from '@angular/core';
import { resolve } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(
      mensaje => console.log('Termino!', mensaje)
      )
      .catch( error => console.error('Error en la promesa', error));

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {

    return new Promise( (resolve1, reject) => {

      let contador = 0;
      let interval = setInterval( () => {

        contador += 1;
        console.log(contador);

        if ( contador === 3 ) {
          resolve1(true);
          clearInterval(interval);
        }

      }, 1000);
    });

  }

}
