import { TestBed } from '@angular/core/testing';

import { GetExistenciasVendedorDetalleService } from './get-existencias-vendedor-detalle.service';

describe('GetExistenciasVendedorDetalleService', () => {
  let service: GetExistenciasVendedorDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetExistenciasVendedorDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
