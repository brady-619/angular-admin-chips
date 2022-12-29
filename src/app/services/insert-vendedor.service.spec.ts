import { TestBed } from '@angular/core/testing';

import { InsertVendedorService } from './insert-vendedor.service';

describe('InsertVendedorService', () => {
  let service: InsertVendedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertVendedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
