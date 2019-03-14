import { TestBed } from '@angular/core/testing';

import { TaurixAPIService } from './taurix-api.service';

describe('TaurixAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaurixAPIService = TestBed.get(TaurixAPIService);
    expect(service).toBeTruthy();
  });
});
