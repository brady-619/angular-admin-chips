import { TestBed } from '@angular/core/testing';

import { GetVendedoresService } from './get-vendedores.service';

describe('GetVendedoresService', () => {
  let service: GetVendedoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetVendedoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
