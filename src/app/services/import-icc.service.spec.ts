import { TestBed } from '@angular/core/testing';

import { ImportIccService } from './import-icc.service';

describe('ImportIccService', () => {
  let service: ImportIccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportIccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
