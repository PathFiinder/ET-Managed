import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadBudgetReportComponent } from './dashboad-budget-report.component';

describe('DashboadBudgetReportComponent', () => {
  let component: DashboadBudgetReportComponent;
  let fixture: ComponentFixture<DashboadBudgetReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboadBudgetReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboadBudgetReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
