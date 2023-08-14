import { TestBed } from '@angular/core/testing';

import { ClassServicsService } from './class-servics.service';

describe('ClassServicsService', () => {
  let service: ClassServicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassServicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
