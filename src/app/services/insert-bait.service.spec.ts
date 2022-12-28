import { TestBed } from '@angular/core/testing';

import { InsertBaitService } from './insert-bait.service';

describe('InsertBaitService', () => {
  let service: InsertBaitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertBaitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
