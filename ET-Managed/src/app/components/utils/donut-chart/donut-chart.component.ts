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
import {ApexDataChartModel} from "../../models/apex-data-chart.model";
import {ApexDataLabels} from 'ng-apexcharts/lib/model/apex-types';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
};




@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.sass']
})
export class DonutChartComponent{

  @Input() data?: ApexDataChartModel ;
  @ViewChild('donut-chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  isChartAvailable: boolean = false;
  colorPalette = ['#00D8B6', '#008FFB',  '#FEB019', '#FF4560', '#775DD0']

  constructor() { }


  ngOnChanges() {
    if (this.data !== null) {
    this.isChartAvailable = true;
    this.chartOptions = this.setChartOptions();
    }
  }

  private setChartOptions(): ChartOptions {
    return {
      chart: {
        type: 'donut',
        width: '100%',
        height: 320
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          customScale: 0.8,
          donut: {
            size: '75%',
          }
        }
      },
      colors: this.colorPalette,
      title: {
        text: 'Total expenses by payments method',
        align: "left",
        style: {
          fontSize: '20px',
          color: '#ADAEB2',
          fontFamily: 'Open Sans'
        }
      },
      series: this.data.series,
      labels: this.data.labels,
      legend: {
        position: 'left',
        offsetY: 80,
        formatter(seriesName, opts) {
          return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
        },
      }
    };
  }

}
