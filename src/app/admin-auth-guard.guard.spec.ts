import { adminAuthGuardGuard } from './admin-auth-guard.guard';
import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';


describe('adminAuthGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => adminAuthGuardGuard());

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
