/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SecurityHttpService } from './securityHttp.service';

describe('Service: SecurityHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityHttpService]
    });
  });

  it('should ...', inject([SecurityHttpService], (service: SecurityHttpService) => {
    expect(service).toBeTruthy();
  }));
});
