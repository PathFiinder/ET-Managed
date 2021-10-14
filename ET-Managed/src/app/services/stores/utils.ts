import {ApexDataChartModel} from '../../components/models/apex-data-chart.model';

export const getCircularGaugeDataFromSelector = (expensesItemValue: number[], expensesItemName: string[]): ApexDataChartModel => {
  const tempCircularChartData: ApexDataChartModel = {
    series: [],
    labels: []
  };

  expensesItemValue.forEach((element, index) => {
    if (element !== undefined) {
      tempCircularChartData.series.push(element);
      tempCircularChartData.labels.push(expensesItemName[index]);
    }
  });
  return tempCircularChartData;
};

