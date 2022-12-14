import { TestBed } from '@angular/core/testing';

import { ExportIccService } from './export-icc.service';

describe('ExportIccService', () => {
  let service: ExportIccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportIccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
