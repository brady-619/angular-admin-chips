import { TestBed } from '@angular/core/testing';

import { GetHistoricoVendedoresService } from './get-historico-vendedores.service';

describe('GetHistoricoVendedoresService', () => {
  let service: GetHistoricoVendedoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHistoricoVendedoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
