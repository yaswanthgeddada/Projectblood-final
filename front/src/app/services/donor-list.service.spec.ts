import { TestBed } from '@angular/core/testing';

import { DonorListService } from './donor-list.service';

describe('DonorListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonorListService = TestBed.get(DonorListService);
    expect(service).toBeTruthy();
  });
});
