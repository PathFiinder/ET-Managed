import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectBudgetItemsMonthItemsByRange } from 'src/app/services/stores/selectors/system-data.selector';
import { MonthBudgetItem } from 'src/app/services/stores/types/systemData.model';

@Component({
  selector: 'app-dashboard-reports',
  templateUrl: './dashboard-reports.component.html',
  styleUrls: ['./dashboard-reports.component.sass']
})
export class DashboardReportsComponent implements OnInit {


  @Input() rangeValue: string;

 
  ngOnChanges() {
    this.allBudgetItems = this.store.select(selectBudgetItemsMonthItemsByRange, {rangeToSelect: this.rangeValue});
  }

  allBudgetItems: Observable<MonthBudgetItem[]>;
  constructor(private store: Store) { 
  }

  ngOnInit(): void {

  }

}
