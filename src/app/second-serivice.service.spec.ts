import { TestBed } from '@angular/core/testing';

import { SecondSeriviceService } from './second-serivice.service';

describe('SecondSeriviceService', () => {
  let service: SecondSeriviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondSeriviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
