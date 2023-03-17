import { TestBed } from '@angular/core/testing';

import { GetListadoVencimientosService } from './get-listado-vencimientos.service';

describe('GetListadoVencimientosService', () => {
  let service: GetListadoVencimientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListadoVencimientosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
