import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyStatementComponent } from './weekly-statement.component';

describe('WeeklyStatementComponent', () => {
  let component: WeeklyStatementComponent;
  let fixture: ComponentFixture<WeeklyStatementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklyStatementComponent]
    });
    fixture = TestBed.createComponent(WeeklyStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
