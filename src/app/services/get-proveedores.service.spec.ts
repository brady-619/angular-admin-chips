import { TestBed } from '@angular/core/testing';

import { GetProveedoresService } from './get-proveedores.service';

describe('GetProveedoresService', () => {
  let service: GetProveedoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProveedoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
