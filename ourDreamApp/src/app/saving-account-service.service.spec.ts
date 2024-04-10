import { TestBed } from '@angular/core/testing';

import { SavingAccountServiceService } from './saving-account-service.service';

describe('SavingAccountServiceService', () => {
  let service: SavingAccountServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavingAccountServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
