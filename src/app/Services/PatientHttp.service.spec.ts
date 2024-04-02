/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PatientHttpService } from './PatientHttp.service';

describe('Service: PatientHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientHttpService]
    });
  });

  it('should ...', inject([PatientHttpService], (service: PatientHttpService) => {
    expect(service).toBeTruthy();
  }));
});
