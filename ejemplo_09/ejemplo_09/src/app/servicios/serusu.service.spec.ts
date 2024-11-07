import { TestBed } from '@angular/core/testing';

import { SerusuService } from './serusu.service';

describe('SerusuService', () => {
  let service: SerusuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerusuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
