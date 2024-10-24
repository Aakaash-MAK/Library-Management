import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { managebooksGuard } from './managebooks.guard';

describe('managebooksGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => managebooksGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
