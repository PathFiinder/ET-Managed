import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeActiveNavigationItemById } from 'src/app/services/stores/actions/system-data.actions';
import { selectActiveTasks,  selectDoneTasks, selectBudgetItemTotalExpensesByRange, selectBudgetItemAllPlanningItemsByRange} from 'src/app/services/stores/selectors/system-data.selector';
import { MonthBudgetItem, TasksItem } from 'src/app/services/stores/types/systemData.model';
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

  constructor(private store: Store) { 

  }

  ngOnInit(): void {
  }

  public onViewReportsClick(): void {
    this.store.dispatch(changeActiveNavigationItemById({itemId: 3}))
  }
}
