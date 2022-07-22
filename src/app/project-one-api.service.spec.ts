import { TestBed } from '@angular/core/testing';

import { ProjectOneApiService } from './project-one-api.service';

describe('ProjectOneApiService', () => {
  let service: ProjectOneApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectOneApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
