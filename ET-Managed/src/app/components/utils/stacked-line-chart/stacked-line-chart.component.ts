import { Component, Input, OnChanges} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexAnnotations, ApexFill
} from 'ng-apexcharts';
import { MonthBudgetItem } from 'src/app/services/stores/types/systemData.model';



export type LineChartOptions = {
  series: ApexAxisChartSeries;
  colors: any[];
  annotations: ApexAnnotations;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  labels: string[];
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  fill: ApexFill
};

type ProceededData = {
  prices: number[],
  dates: string[],
  annotationLabels: string[];
};

@Component({
  selector: 'app-stacked-line-chart',
  templateUrl: './stacked-line-chart.component.html',
  styleUrls: ['./stacked-line-chart.component.sass']
})



export class StackedLineChartComponent implements OnChanges{

  @Input() budgetItems: MonthBudgetItem[];
  public chartOptions: Partial<LineChartOptions>;

  isChartAvailable = false;

  ngOnChanges(): void {

    if (this.budgetItems) {
      const chartData: ProceededData = this.proceedData(this.budgetItems);
      this.isChartAvailable = true;
      this.setChartOptions(chartData);

    }

  }

  private setChartOptions(chartData: ProceededData): void {
    this.chartOptions = {
      series: [
        {
          name: 'Prices',
          data: chartData?.prices
        }
      ],
      chart: {
        height: 370,
        width: 1250,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      colors: ['#42AEA7'],
      annotations: {
        xaxis: [
          this.generateAnnotationObject(chartData)
        ]
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        padding: {
          right: 30,
          left: 20
        }
      },
      title: {
        text: 'Total expenses',
        align: 'left',
        style: {
          fontSize: '20px',
          color: '#ADAEB2',
          fontFamily: 'Open Sans'
        }
      },
      labels: chartData?.dates,
      xaxis: {
        type: 'datetime'
      },
      fill: {
        colors: ['#42AEA7']
      }
    };
  }

  private proceedData(budgetItems?: MonthBudgetItem[]): ProceededData {
    const proceededData: ProceededData = {
      annotationLabels: [],
      dates: [],
      prices: []
    };

    budgetItems?.forEach(item => {
      const pucharseDate = item.pucharseDate.slice(0, item.pucharseDate.indexOf('T'));
      if (proceededData.dates?.length === 0 || proceededData?.dates?.filter(data => data === pucharseDate).length == 0) {

        proceededData.dates.push(pucharseDate);
        proceededData.prices.push(item.price);
        proceededData.annotationLabels.push(item.name);

      } else {

        const indexOfElement = proceededData.dates.indexOf(pucharseDate);
        proceededData.prices[indexOfElement] = proceededData.prices[indexOfElement] + item.price;
        proceededData.annotationLabels[indexOfElement] = `${proceededData.annotationLabels[indexOfElement]}, ${item.name}`;

      }
    });

    return proceededData;
  }

  private generateAnnotationObject(chartData: ProceededData): any {
    const max = chartData.prices.reduce((prev, current) => (prev > current) ? prev : current);
    return {
        x: new Date(chartData.dates[chartData.prices.indexOf(max)]).getTime(),
        strokeDashArray: 0,
        borderColor: '#775DD0',
        offsetX: 0,
        label: {
          borderColor: '#775DD0',
          orientation: 'horizontally',
          offsetX: 34,
          style: {
                fontSize: '12px',
                color: '#fff',
                background: '#775DD0'
              },
          text: chartData.annotationLabels[chartData.prices.indexOf(max)]
        }
    };
  }


}
