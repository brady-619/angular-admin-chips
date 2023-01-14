import { TestBed } from '@angular/core/testing';

import { GetSearchVendedoresService } from './get-search-vendedores.service';

describe('GetSearchVendedoresService', () => {
  let service: GetSearchVendedoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSearchVendedoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
