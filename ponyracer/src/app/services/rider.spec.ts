import { TestBed } from '@angular/core/testing';

import { Rider } from './rider';

describe('Rider', () => {
  let service: Rider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
