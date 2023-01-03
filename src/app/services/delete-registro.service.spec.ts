import { TestBed } from '@angular/core/testing';

import { DeleteRegistroService } from './delete-registro.service';

describe('DeleteRegistroService', () => {
  let service: DeleteRegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteRegistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
