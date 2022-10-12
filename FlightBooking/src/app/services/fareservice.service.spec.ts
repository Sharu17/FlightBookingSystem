import { TestBed } from '@angular/core/testing';

import { FareserviceService } from './fareservice.service';

describe('FareserviceService', () => {
  let service: FareserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FareserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
