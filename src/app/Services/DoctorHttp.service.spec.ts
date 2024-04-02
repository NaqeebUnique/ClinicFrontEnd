/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DoctorHttpService } from './DoctorHttp.service';

describe('Service: DoctorHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorHttpService]
    });
  });

  it('should ...', inject([DoctorHttpService], (service: DoctorHttpService) => {
    expect(service).toBeTruthy();
  }));
});
