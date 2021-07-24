import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectBudgetItemMaxExpensesByRange, selectBudgetItemsMonthItemsByRange, selectBudgetItemsTotalExpenseWithSelectedMethodByRange, selectBudgetItemsTotalIncomeByRange, selectTotalSavingFromMonthByRange } from 'src/app/services/stores/selectors/system-data.selector';
import { MonthBudgetItem, PaymentMethod } from 'src/app/services/stores/types/systemData.model';

@Component({
  selector: 'app-dashboard-reports',
  templateUrl: './dashboard-reports.component.html',
  styleUrls: ['./dashboard-reports.component.sass']
})
export class DashboardReportsComponent implements OnInit {


  @Input() rangeValue: string;

  totalIncome: Observable<number>;
  creditCardPayments: Observable<number>;
  paypalPayments: Observable<number>;
  cashPayments: Observable<number>;
  greatestExpense: Observable<number>;
  savingsFromMonth: Observable<number>;

 
  ngOnChanges() {
    this.allBudgetItems = this.store.select(selectBudgetItemsMonthItemsByRange, {rangeToSelect: this.rangeValue});
    this.totalIncome = this.store.select(selectBudgetItemsTotalIncomeByRange, {rangeToSelect: this.rangeValue});
    this.greatestExpense = this.store.select(selectBudgetItemMaxExpensesByRange, {rangeToSelect: this.rangeValue});
    this.savingsFromMonth = this.store.select(selectTotalSavingFromMonthByRange, {rangeToSelect: this.rangeValue});

    this.creditCardPayments =  this.store.select(selectBudgetItemsTotalExpenseWithSelectedMethodByRange, {rangeToSelect: this.rangeValue, paymentMethod: PaymentMethod.CREDIT_CARD})
    this.paypalPayments =  this.store.select(selectBudgetItemsTotalExpenseWithSelectedMethodByRange, {rangeToSelect: this.rangeValue, paymentMethod: PaymentMethod.PAYPAL})
    this.cashPayments =  this.store.select(selectBudgetItemsTotalExpenseWithSelectedMethodByRange, {rangeToSelect: this.rangeValue, paymentMethod: PaymentMethod.CASH})

  }

  allBudgetItems: Observable<MonthBudgetItem[]>;
  constructor(private store: Store) { 
  }

  ngOnInit(): void {

  }

}
