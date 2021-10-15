import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectBudgetItemsMonthItemsTotalNumber} from '../../../../services/stores/selectors/system-data.selector';
import {RangeService} from '../../../../shared/range-service';

@Component({
  selector: 'app-budget-header',
  templateUrl: './budget-header.component.html',
  styleUrls: ['./budget-header.component.sass']
})
export class BudgetHeaderComponent implements OnInit{

  private range: string;
  public activeBudgetItemsNumber: Observable<number>;


  constructor(private store: Store, private rangeService: RangeService) {}

  ngOnInit(): void {
    this.range = this.rangeService.getDateRange();
    this.activeBudgetItemsNumber = this.store.select(selectBudgetItemsMonthItemsTotalNumber, {rangeToSelect: this.range});
  }
}

