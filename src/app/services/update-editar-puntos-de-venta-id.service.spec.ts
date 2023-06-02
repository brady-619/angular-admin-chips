import { TestBed } from '@angular/core/testing';

import { UpdateEditarPuntosDeVentaIdService } from './update-editar-puntos-de-venta-id.service';

describe('UpdateEditarPuntosDeVentaIdService', () => {
  let service: UpdateEditarPuntosDeVentaIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateEditarPuntosDeVentaIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
