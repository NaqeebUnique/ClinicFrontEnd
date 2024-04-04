import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { doctorAuthGuardGuard } from './doctor-auth-guard.guard';

describe('doctorAuthGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => doctorAuthGuardGuard());

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
