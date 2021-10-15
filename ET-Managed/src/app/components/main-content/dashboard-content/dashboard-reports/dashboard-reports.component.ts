import {Component, Input, OnChanges} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable  } from 'rxjs';
import {
  selectBudgetItemMaxExpensesByRange,
  selectBudgetItemsMonthItemsExpensesByRange, selectBudgetItemsTotalExpensesByRange,
  selectBudgetItemsTotalExpenseWithSelectedMethodByRange,
  selectBudgetItemsTotalIncomeByRange, selectExpensesCategoriesDataForRadarChartByRange,
  selectMethodsPaymentDataForCircularGaugeChartByRange,
  selectTotalSavingFromMonthByRange
} from 'src/app/services/stores/selectors/system-data.selector';
import { MonthBudgetItem, PaymentMethod } from 'src/app/services/stores/types/systemData.model';
import {ApexDataChartModel} from '../../../models/apex-data-chart.model';

@Component({
  selector: 'app-dashboard-reports',
  templateUrl: './dashboard-reports.component.html',
  styleUrls: ['./dashboard-reports.component.sass']
})
export class DashboardReportsComponent implements OnChanges {


  @Input() rangeValue: string;

  allBudgetItems: Observable<MonthBudgetItem[]>;
  totalIncome: Observable<number>;
  totalExpenses: Observable<number>;
  creditCardPayments: Observable<number>;
  greatestExpense: Observable<number>;
  savingsFromMonth: Observable<number>;
  donutChartData: Observable<ApexDataChartModel>;
  radarChartData: Observable<number[]>;

  constructor(private store: Store) {
  }

  ngOnChanges(): void  {

    this.allBudgetItems = this.store.select(selectBudgetItemsMonthItemsExpensesByRange, {rangeToSelect: this.rangeValue});
    this.totalIncome = this.store.select(selectBudgetItemsTotalIncomeByRange, {rangeToSelect: this.rangeValue});
    this.totalExpenses = this.store.select(selectBudgetItemsTotalExpensesByRange, {rangeToSelect: this.rangeValue});
    this.greatestExpense = this.store.select(selectBudgetItemMaxExpensesByRange, {rangeToSelect: this.rangeValue});
    this.savingsFromMonth = this.store.select(selectTotalSavingFromMonthByRange, {rangeToSelect: this.rangeValue});

    this.creditCardPayments = this.store.select(selectBudgetItemsTotalExpenseWithSelectedMethodByRange,
      {rangeToSelect: this.rangeValue, paymentMethod: PaymentMethod.CREDIT_CARD});
    this.donutChartData = this.store.select(selectMethodsPaymentDataForCircularGaugeChartByRange, {rangeToSelect: this.rangeValue});
    this.radarChartData = this.store.select(selectExpensesCategoriesDataForRadarChartByRange, {rangeToSelect: this.rangeValue});
  }

}
