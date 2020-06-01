import { TestBed } from '@angular/core/testing';

import { RESTContactsService } from './restcontacts.service';

describe('RESTContactsService', () => {
  let service: RESTContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RESTContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
