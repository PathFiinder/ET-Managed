import {Component, Input, OnInit, ViewChild} from '@angular/core';


import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexLegend,
  ApexResponsive,
  ChartComponent
} from 'ng-apexcharts';
import {MonthBudgetItem} from '../../../services/stores/types/systemData.model';
import {ApexDataChartModel} from '../../models/apex-data-chart.model';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive | ApexResponsive[];
};


@Component({
  selector: 'app-circular-gauge-chart',
  templateUrl: './circular-gauge-chart.component.html',
  styleUrls: ['./circular-gauge-chart.component.sass']
})
export class CircularGaugeChartComponent {

  @Input() data?: ApexDataChartModel ;
  @ViewChild('circular-gauge-chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  isChartAvailable: boolean = false;

  ngOnChanges() {
    if (this.data !== null) {
      this.isChartAvailable = true;
      this.chartOptions = this.setChartOptions();

    }
  }

  private setChartOptions(): ChartOptions {
    return {
      series:  this.data.series,
      chart: {
        height: 320,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 360,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
      labels: this.data.labels,
      legend: {
        show: true,
        fontSize: '16px',
        position: 'top',
        horizontalAlign: 'center',
        offsetX: 0,
        offsetY: 0,
        labels: {
          useSeriesColors: true
        },
        formatter(seriesName, opts) {
          return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          horizontal: 10,
          vertical: 10
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        }
      ]
    };
  }

  constructor() {
  }

}
