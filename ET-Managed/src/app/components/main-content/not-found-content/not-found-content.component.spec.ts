import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundContentComponent } from './not-found-content.component';

describe('NotFoundContentComponent', () => {
  let component: NotFoundContentComponent;
  let fixture: ComponentFixture<NotFoundContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
