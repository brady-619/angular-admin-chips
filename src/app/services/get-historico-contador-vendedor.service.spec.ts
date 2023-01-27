import { TestBed } from '@angular/core/testing';

import { GetHistoricoContadorVendedorService } from './get-historico-contador-vendedor.service';

describe('GetHistoricoContadorVendedorService', () => {
  let service: GetHistoricoContadorVendedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHistoricoContadorVendedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
