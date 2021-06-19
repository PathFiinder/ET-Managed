import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeActiveDashboardReportsTab, changeActiveNavigationItemById } from 'src/app/services/stores/actions/system-data.actions';
import { selectActiveTasks,  selectDoneTasks, selectBudgetItemTotalExpensesByRange, selectBudgetItemAllPlanningItemsByRange, selectIsBudgetReportsActice, selectIsTasksReportsActive} from 'src/app/services/stores/selectors/system-data.selector';
import {  MonthBudgetItem, TasksItem } from 'src/app/services/stores/types/systemData.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  date = new Date();
  month = this.date.getMonth() + 1;
  range = `${this.month < 10 ? '0'  + this.month : this.month}.${this.date.getFullYear()}`

  activeTasks: Observable<TasksItem | TasksItem[]> = this.store.select(selectActiveTasks);
  doneTasks: Observable<TasksItem | TasksItem[]> = this.store.select(selectDoneTasks);
  totalExpensesInMonth: Observable<number> = this.store.select(selectBudgetItemTotalExpensesByRange, {rangeToSelect: this.range})
  totalPlannedItems: Observable<MonthBudgetItem[]> = this.store.select(selectBudgetItemAllPlanningItemsByRange,  {rangeToSelect: this.range})
  isTasksReportsActive: Observable<boolean> = this.store.select(selectIsTasksReportsActive)
  isBudgetReportsActice: Observable<boolean> = this.store.select(selectIsBudgetReportsActice)


  constructor(private store: Store) { 

  }

  ngOnInit(): void {
  }

  public onViewReportsClick(): void {
    this.store.dispatch(changeActiveNavigationItemById({itemId: 3}))
  }

  public onTasksReportClick(): void {
    this.store.dispatch(changeActiveDashboardReportsTab({activeTabIndex: 0}))
  }

  public onBudgetReportClick(): void {
    this.store.dispatch(changeActiveDashboardReportsTab({activeTabIndex: 1}))
  }
}
