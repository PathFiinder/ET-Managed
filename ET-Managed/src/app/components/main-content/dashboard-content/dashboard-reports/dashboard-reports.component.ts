import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, combineLatest  } from 'rxjs';
import {
  selectBudgetItemMaxExpensesByRange,
  selectBudgetItemsMonthItemsByRange,
  selectBudgetItemsTotalExpenseWithSelectedMethodByRange,
  selectBudgetItemsTotalIncomeByRange,
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
export class DashboardReportsComponent implements OnInit {


  @Input() rangeValue: string;

  allBudgetItems: Observable<MonthBudgetItem[]>;
  totalIncome: Observable<number>;
  creditCardPayments: Observable<number>;
  // paypalPayments: Observable<number>;
  // cashPayments: Observable<number>;
  greatestExpense: Observable<number>;
  savingsFromMonth: Observable<number>;
  donutChartsData: Observable<ApexDataChartModel>;



  ngOnChanges() {
    this.allBudgetItems = this.store.select(selectBudgetItemsMonthItemsByRange, {rangeToSelect: this.rangeValue});
    this.totalIncome = this.store.select(selectBudgetItemsTotalIncomeByRange, {rangeToSelect: this.rangeValue});
    this.greatestExpense = this.store.select(selectBudgetItemMaxExpensesByRange, {rangeToSelect: this.rangeValue});
    this.savingsFromMonth = this.store.select(selectTotalSavingFromMonthByRange, {rangeToSelect: this.rangeValue});

    this.creditCardPayments =  this.store.select(selectBudgetItemsTotalExpenseWithSelectedMethodByRange, {rangeToSelect: this.rangeValue, paymentMethod: PaymentMethod.CREDIT_CARD})
    // this.paypalPayments =  this.store.select(selectBudgetItemsTotalExpenseWithSelectedMethodByRange, {rangeToSelect: this.rangeValue, paymentMethod: PaymentMethod.PAYPAL})
    // this.cashPayments =  this.store.select(selectBudgetItemsTotalExpenseWithSelectedMethodByRange, {rangeToSelect: this.rangeValue, paymentMethod: PaymentMethod.CASH})
    this.donutChartsData = this.store.select(selectMethodsPaymentDataForCircularGaugeChartByRange, {rangeToSelect: this.rangeValue});

  }



  constructor(private store: Store) {
  }





  ngOnInit(): void {

  }



}
