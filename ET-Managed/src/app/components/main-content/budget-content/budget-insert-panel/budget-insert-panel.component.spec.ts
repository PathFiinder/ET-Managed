import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetInsertPanelComponent } from './budget-insert-panel.component';

describe('BudgetInsertPanelComponent', () => {
  let component: BudgetInsertPanelComponent;
  let fixture: ComponentFixture<BudgetInsertPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetInsertPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetInsertPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
