import { TestBed } from '@angular/core/testing';

import { CvDetailsService } from './cv-details.service';

describe('CvDetailsService', () => {
  let service: CvDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
