import { TestBed } from '@angular/core/testing';

import { TfaService } from './tfa.service';

describe('TfaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TfaService = TestBed.get(TfaService);
    expect(service).toBeTruthy();
  });
});
