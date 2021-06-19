import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadTasksReportComponent } from './dashboad-tasks-report.component';

describe('DashboadTasksReportComponent', () => {
  let component: DashboadTasksReportComponent;
  let fixture: ComponentFixture<DashboadTasksReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboadTasksReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboadTasksReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
