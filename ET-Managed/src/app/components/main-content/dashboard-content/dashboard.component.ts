import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeActiveNavigationItemById } from 'src/app/services/stores/actions/system-data.actions';
import { selectActiveTasks,  selectDoneTasks, selectBudgetItemTotalExpensesByRange, selectBudgetItemAllPlanningItemsByRange} from 'src/app/services/stores/selectors/system-data.selector';
import { MonthBudgetItem, TasksItem } from 'src/app/services/stores/types/systemData.model';
import {RangeService} from '../../../shared/range-service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {

  range: string = this.rangeService.getDateRange();

  activeTasks: Observable<TasksItem | TasksItem[]> = this.store.select(selectActiveTasks);
  doneTasks: Observable<TasksItem | TasksItem[]> = this.store.select(selectDoneTasks);
  totalExpensesInMonth: Observable<number> = this.store.select(selectBudgetItemTotalExpensesByRange, {rangeToSelect: this.range});
  totalPlannedItems: Observable<MonthBudgetItem[]> = this.store.select(selectBudgetItemAllPlanningItemsByRange,  {rangeToSelect: this.range});

  constructor(private store: Store,
              private rangeService: RangeService) {
  }


  public onViewReportsClick(): void {
    this.store.dispatch(changeActiveNavigationItemById({itemId: 3}));
  }
}
