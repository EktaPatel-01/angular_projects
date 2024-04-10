import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTransferPageComponent } from './fund-transfer-page.component';

describe('FundTransferPageComponent', () => {
  let component: FundTransferPageComponent;
  let fixture: ComponentFixture<FundTransferPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundTransferPageComponent]
    });
    fixture = TestBed.createComponent(FundTransferPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
