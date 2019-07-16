import { TestBed } from '@angular/core/testing';

import { UnitOfWorkService } from './unit-of-work.service';

describe('UnitOfWorkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitOfWorkService = TestBed.get(UnitOfWorkService);
    expect(service).toBeTruthy();
  });
});
