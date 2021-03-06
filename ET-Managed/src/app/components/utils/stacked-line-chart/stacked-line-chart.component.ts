import { Component, Input, OnInit, ViewChild } from '@angular/core';
import * as ApexCharts from 'apexcharts';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexAnnotations
} from "ng-apexcharts";
import { MonthBudgetItem } from 'src/app/services/stores/types/systemData.model';



export type LineChartOptions = {
  series: ApexAxisChartSeries;
  annotations: ApexAnnotations;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  labels: string[];
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

type ProceededData = {
  prices: number[],
  dates: string[],
  annotationLabels: string[];
}

@Component({
  selector: 'app-stacked-line-chart',
  templateUrl: './stacked-line-chart.component.html',
  styleUrls: ['./stacked-line-chart.component.sass']
})



export class StackedLineChartComponent{
  
  @Input() budgetItems: MonthBudgetItem[];
  public chartOptions: Partial<LineChartOptions>;
  
  isChartAvailable: boolean = false;

  ngOnChanges() {
    if(this.budgetItems) {
      const chartData: ProceededData = this.proceedData(this.budgetItems);
      this.isChartAvailable = true;
      this.setChartOptions(chartData)
    }

  }

  private setChartOptions(chartData: ProceededData): void {
    this.chartOptions = {
      series: [
        {
          name: "Prices",
          data: chartData?.prices
        }
      ],
      chart: {
        height: 370,
        width: 1250,
        type: "line",
        toolbar: {
          show: false
        }
      },
      annotations: {
        xaxis: this.generateAnnotationObject(chartData)
      },
      // },
      // dataLabels: {
      //   enabled: true
      // },
      stroke: {
        curve: "straight"
      },
      grid: {
        padding: {
          right: 30,
          left: 20
        }
      },
      title: {
        text: "Total expenses",
        align: "left",
        style: {
          fontSize: '20px',
          color: '#ADAEB2',
          fontFamily: 'Open Sans'
        }
      },
      labels: chartData?.dates,
      xaxis: {
        type: "datetime"
      }
    };
  }

  private proceedData(budgetItems?: MonthBudgetItem[]): ProceededData {
    const proceededData: ProceededData = {
      annotationLabels: [],
      dates: [],
      prices: []
    }
    
    budgetItems?.forEach(item => {
      const pucharseDate = item.pucharseDate.slice(0, item.pucharseDate.indexOf('T'));
      if(proceededData.dates?.length === 0 || proceededData?.dates?.filter(data => data === pucharseDate).length == 0) {

        proceededData.dates.push(pucharseDate);
        proceededData.prices.push(item.price);
        proceededData.annotationLabels.push(item.name);

      } else {

        const indexOfElement = proceededData.dates.indexOf(pucharseDate);
        proceededData.prices[indexOfElement] = proceededData.prices[indexOfElement] + item.price
        proceededData.annotationLabels[indexOfElement] = `${proceededData.annotationLabels[indexOfElement]}, ${item.name}`;

      } 
    })

    return proceededData;
  }

  private generateAnnotationObject(chartData: ProceededData): any {
    const annotationLabels = []
    chartData.annotationLabels.forEach((label, index) => {
      annotationLabels.push( {
        x: new Date(chartData.dates[index]).getTime(),
        strokeDashArray: 0,
        borderColor: "#775DD0",
        offsetX: 0,
        label: {
          borderColor: "#775DD0",
          style: {
                fontSize: "12px",
                color: "#fff",
                background: "#775DD0"
              },
          text: label
        }
      })
    })
    return annotationLabels
  }


}
