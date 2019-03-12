import { TestBed } from '@angular/core/testing';

import { BitCoinService } from './bit-coin.service';

describe('BitCoinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitCoinService = TestBed.get(BitCoinService);
    expect(service).toBeTruthy();
  });
});
