import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStatementComponent } from './add-statement.component';

describe('AddStatementComponent', () => {
  let component: AddStatementComponent;
  let fixture: ComponentFixture<AddStatementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStatementComponent]
    });
    fixture = TestBed.createComponent(AddStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
