import { TestBed } from '@angular/core/testing';

import { GetPuntoDeVentaIdService } from './get-punto-de-venta-id.service';

describe('GetPuntoDeVentaIdService', () => {
  let service: GetPuntoDeVentaIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPuntoDeVentaIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
