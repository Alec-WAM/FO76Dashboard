import { TestBed } from '@angular/core/testing';

import { Fo76Service } from './fo76.service';

describe('Fo76Service', () => {
  let service: Fo76Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fo76Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
