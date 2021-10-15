import {ApexDataChartModel} from '../../components/models/apex-data-chart.model';
import {ExpenseIncomeCategory, MonthBudgetItem} from './types/systemData.model';


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

export const getRadarChatDataFromSelector = (monthBudgetItems: MonthBudgetItem[]): number[] => {
  const expensesDataByCategory = [
    {
      expenseType: ExpenseIncomeCategory.BILLS,
      numberOfExpensesByCategory: 0
    },
    {
      expenseType: ExpenseIncomeCategory.HOUSE,
      numberOfExpensesByCategory: 0
    },
    {
      expenseType: ExpenseIncomeCategory.LOAN,
      numberOfExpensesByCategory: 0
    },
    {
      expenseType: ExpenseIncomeCategory.OTHER,
      numberOfExpensesByCategory: 0
    }
  ];

  const radarChartDataSetters = new Map([
    [ExpenseIncomeCategory.BILLS, () => expensesDataByCategory[0].numberOfExpensesByCategory++],
    [ExpenseIncomeCategory.HOUSE, () => expensesDataByCategory[1].numberOfExpensesByCategory++],
    [ExpenseIncomeCategory.LOAN, () => expensesDataByCategory[2].numberOfExpensesByCategory++],
    [ExpenseIncomeCategory.OTHER, () => expensesDataByCategory[3].numberOfExpensesByCategory++]
  ]);
  monthBudgetItems?.forEach(item => radarChartDataSetters.get(item.category)());
  return [expensesDataByCategory[0].numberOfExpensesByCategory, expensesDataByCategory[1].numberOfExpensesByCategory,
    expensesDataByCategory[2].numberOfExpensesByCategory, expensesDataByCategory[3].numberOfExpensesByCategory];
}
