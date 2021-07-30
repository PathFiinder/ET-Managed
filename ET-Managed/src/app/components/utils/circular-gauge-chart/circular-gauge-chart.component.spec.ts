import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularGaugeChartComponent } from './circular-gauge-chart.component';

describe('CircularGaugeChartComponent', () => {
  let component: CircularGaugeChartComponent;
  let fixture: ComponentFixture<CircularGaugeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircularGaugeChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularGaugeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
