import { TestBed } from '@angular/core/testing';

import { Travell } from './travell';

describe('Travell', () => {
  let service: Travell;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Travell);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
