import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplTransferComponent } from './impl-transfer.component';

describe('ImplTransferComponent', () => {
  let component: ImplTransferComponent;
  let fixture: ComponentFixture<ImplTransferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImplTransferComponent]
    });
    fixture = TestBed.createComponent(ImplTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
