import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {
  // private grafi: Grafico = { nombre: '', labels: [], data: [], type: '', leyenda: '' };

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  public grafVec: any[] = [] ;



  graficos: any = {
    'grafico1': {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'El pan se come con'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
    },
  };

  constructor() {

   }

  ngOnInit() {
    this.llenar();
  }

  llenar() {

    for (const grafico in this.graficos) {
      if (this.graficos.hasOwnProperty(grafico)) {
        const h: any = [];
        h.nombre = grafico;
        h.labels = this.graficos[grafico]['labels'];
        h.data = this.graficos[grafico]['data'];
        h.type = this.graficos[grafico]['type'];
        h.leyenda = this.graficos[grafico]['leyenda'];

        console.log(h);

        this.grafVec.push(h);
        console.log(this.grafVec);

        // this.grafi.nombre = grafico;
        // this.grafi.labels = this.graficos[grafico]['labels'];
        // this.grafi.data = this.graficos[grafico]['data'];
        // this.grafi.type = this.graficos[grafico]['type'];
        // this.grafi.leyenda = this.graficos[grafico]['leyenda'];
        // console.log(this.grafi);
        // this.grafVec.push(this.grafi);
        // console.log(this.grafi);
      }
    }
  }

}

export interface Grafico {
  nombre: string;
  labels: string[];
  data: number[];
  type: string;
  leyenda: string;
}
