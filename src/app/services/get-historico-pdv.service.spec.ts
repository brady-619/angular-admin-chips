import { TestBed } from '@angular/core/testing';

import { GetHistoricoPdvService } from './get-historico-pdv.service';

describe('GetHistoricoPdvService', () => {
  let service: GetHistoricoPdvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHistoricoPdvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
