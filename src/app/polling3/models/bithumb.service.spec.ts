import { TestBed } from '@angular/core/testing';

import { BithumbService } from './bithumb.service';

describe('BithumbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BithumbService = TestBed.get(BithumbService);
    expect(service).toBeTruthy();
  });
});
