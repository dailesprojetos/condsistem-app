import { Component } from '@angular/core';
import {Chart, registerables} from 'chart.js/auto';
import { CondominiosService } from '../condominios.service';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'ng-chart';

  constructor(private service:CondominiosService) {}

  registro: any;

  dbdata_x: any[] = [];
  dbdata_y: any[] = [];

  ngOnInit() {
    this.service.getCondominios().subscribe(result => {
      this.registro = result;
      if(this.registro!== null) {
          for (let i = 0; i < this.registro.length; i++) {
            this.dbdata_x.push(this.registro[i].descricao);
            this.dbdata_y.push(this.registro[i].cnpj);
            //console.log(this.chartdata[i]);
        }
        this.graficoCondominios(this.dbdata_x,this.dbdata_y);
      }
    });
  }

  graficoCondominios(dbdata_x: any, dbdata_y:any) {
    const myChart = new Chart('condominio', {
      type: 'bar',
      data: {
        labels: dbdata_x,
        datasets: [
          {
            label: 'GRÁFICOS DE CONDOMÍNIOS',
            data: dbdata_y,
            backgroundColor:[
              'rgba(221, 22, 65, 1)',
            ],
            borderColor:[
              'rgba(221, 22, 65, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },

      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
