import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {
  selectBudgetItemsMonthItemsTotalNumber,
  selectBudgetItemsTotalIncomeByRange
} from '../../../../services/stores/selectors/system-data.selector';
import {RangeService} from '../../../../shared/range-service';
import {updateTotalMonthBudgetValueByRange} from "../../../../services/stores/actions/system-data.actions";

@Component({
  selector: 'app-budget-header',
  templateUrl: './budget-header.component.html',
  styleUrls: ['./budget-header.component.sass']
})
export class BudgetHeaderComponent implements OnInit{

  private range: string;
  public activeBudgetItemsNumber: Observable<number>;
  public totalMonthBudget: Observable<number>;

  constructor(private store: Store, private rangeService: RangeService) {}

  ngOnInit(): void {
    this.range = this.rangeService.getDateRange();
    this.activeBudgetItemsNumber = this.store.select(selectBudgetItemsMonthItemsTotalNumber, {rangeToSelect: this.range});
    this.totalMonthBudget = this.store.select(selectBudgetItemsTotalIncomeByRange, {rangeToSelect: this.range});
  }

  public onInputChange(event: Event): void {
    const inputValue = parseInt((event.target as HTMLInputElement).value, 10);
    this.store.dispatch(updateTotalMonthBudgetValueByRange({range: this.range, monthBudget: inputValue}));
  }
}

