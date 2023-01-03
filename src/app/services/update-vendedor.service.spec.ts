import { TestBed } from '@angular/core/testing';

import { UpdateVendedorService } from './update-vendedor.service';

describe('UpdateVendedorService', () => {
  let service: UpdateVendedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateVendedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
