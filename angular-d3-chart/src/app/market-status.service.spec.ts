import { TestBed, inject } from '@angular/core/testing';

import { MarketStatusService } from './market-status.service';

describe('MarketStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarketStatusService]
    });
  });

  it('should be created', inject([MarketStatusService], (service: MarketStatusService) => {
    expect(service).toBeTruthy();
  }));
});
