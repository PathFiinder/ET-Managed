import {Injectable} from '@angular/core';

@Injectable()
export class RangeService {
  date = new Date();
  month = this.date.getMonth() + 1;
  // range = `${this.month < 10 ? '0'  + this.month : this.month}.${this.date.getFullYear()}`
  range = '07.2021';

  public getDateRange(): string {
    return this.range;
  }
}
