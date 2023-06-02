import { TestBed } from '@angular/core/testing';

import { DeletePuntoDeVentaIdService } from './delete-punto-de-venta-id.service';

describe('DeletePuntoDeVentaIdService', () => {
  let service: DeletePuntoDeVentaIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletePuntoDeVentaIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
