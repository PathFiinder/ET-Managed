import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {ApexAxisChartSeries, ApexChart, ApexPlotOptions, ApexTitleSubtitle, ApexXAxis, ChartComponent} from 'ng-apexcharts';
import {ApexDataChartModel} from '../../models/apex-data-chart.model';
import {ApexDataLabels} from 'ng-apexcharts/lib/model/apex-types';
import {ExpenseIncomeCategory} from '../../../services/stores/types/systemData.model';



export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  // labels: string[];
  // colors: string[];
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.sass']
})

export class RadarChartComponent implements OnChanges {

  @Input() data?: number[];
  @ViewChild('radar-chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  isChartAvailable = true;
  colorPalette = ['#00D8B6', '#008FFB',  '#FEB019', '#FF4560', '#775DD0'];


  ngOnChanges(): void {
    if (this.data !== null) {
      this.isChartAvailable = true;
      this.chartOptions = this.setChartOptions();
    }
  }

  private setChartOptions(): ChartOptions {
    return {
      series: [
        {
          data: this.data
        }
      ],
      chart: {
        height: 350,
        type: 'radar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radar: {
          offsetY: -20,
          size: 110
        }
      },
      title: {
        text: 'Expenses categories',
        align: 'left',
        style: {
          fontSize: '20px',
          color: '#ADAEB2',
          fontFamily: 'Open Sans'
        }
      },
      dataLabels: {
        enabled: true
      },
      xaxis: {
        categories: [ExpenseIncomeCategory.BILLS, ExpenseIncomeCategory.HOUSE, ExpenseIncomeCategory.LOAN, ExpenseIncomeCategory.OTHER]
      }
    };
  }


}
