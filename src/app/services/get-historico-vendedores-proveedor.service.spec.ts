import { TestBed } from '@angular/core/testing';

import { GetHistoricoVendedoresProveedorService } from './get-historico-vendedores-proveedor.service';

describe('GetHistoricoVendedoresProveedorService', () => {
  let service: GetHistoricoVendedoresProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHistoricoVendedoresProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
