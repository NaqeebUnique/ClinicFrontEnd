/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminHttpService } from './AdminHttp.service';

describe('Service: AdminHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminHttpService]
    });
  });

  it('should ...', inject([AdminHttpService], (service: AdminHttpService) => {
    expect(service).toBeTruthy();
  }));
});
