import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFund2Component } from './transfer-fund2.component';

describe('TransferFund2Component', () => {
  let component: TransferFund2Component;
  let fixture: ComponentFixture<TransferFund2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferFund2Component]
    });
    fixture = TestBed.createComponent(TransferFund2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
